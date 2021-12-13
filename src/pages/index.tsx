import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { Header } from '../components/Header';
import { SliderSection } from '../components/SliderSection';
import { WhoAmISection } from '../components/WhoAmISection';
import { PortfolioSection } from '../components/PortfolioSection';
import { PricingSection } from '../components/PricingSection';
import { Footer } from '../components/Footer';

import { getPrismicClient } from '../services/prismic';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Slide = {
  id: string;
  url: string;
};

type Project = {
  id: string;
  url: string;
  uid: string;
};

interface HomeProps {
  slides: Slide[];
  projects: Project[];
}

export default function Home({ slides, projects }: HomeProps) {
  return (
    <>
      <Header />

      <SliderSection slides={slides} />

      <WhoAmISection />

      <PortfolioSection projects={projects} />

      <PricingSection />

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const slidesResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'slider_image'),
  ]);

  const slides = slidesResponse.results.map(slide => ({
    url: slide.data.image.url,
    id: slide.id,
  }));

  const projectsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      fetch: ['project.preview_image'],
    },
  );

  const projects = projectsResponse.results.map(project => ({
    url: project.data.preview_image.url,
    id: project.id,
    uid: project.uid,
  }));

  return {
    props: {
      slides,
      projects,
    },
    revalidate: 20,
  };
};
