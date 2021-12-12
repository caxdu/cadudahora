import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

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
  console.log(project);

  return <h1>Project</h1>;
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
