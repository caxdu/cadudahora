/* eslint-disable react/no-array-index-key */
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import { Content, Cover, Image } from '../../styles/pages/Project';

type Project = {
  cover: string;
  title: string;
  description: string;
  client_description: string;
  year: number;
  images: string[];
};

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <Cover image={project.cover} />

      <Content>
        <main>
          <h1>
            <span>&lt;</span>
            {project.title}
          </h1>

          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </main>

        <aside>
          <div>
            <strong>CLIENTE:</strong>
            <p>{project.client_description}</p>
          </div>

          <div>
            <strong>ANO:</strong>
            <p>{project.year}</p>
          </div>
        </aside>
      </Content>

      {project.images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    Prismic.predicates.at('document.type', 'project'),
    { fetch: ['project.uid'] },
  );

  const paths = response.results.map(project => ({
    params: { slug: project.uid },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();

  const response = await prismic.getByUID('project', String(slug), {});

  const images = response.data.images.map(image => String(image.url));

  const project = {
    cover: response.data.cover_image.url,
    title: RichText.asText(response.data.title),
    description: RichText.asHtml(response.data.description),
    client_description: RichText.asText(response.data.client_description),
    year: new Date(response.data.year).getFullYear(),
    images,
  };

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
