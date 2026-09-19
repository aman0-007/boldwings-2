import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import Stats from '../components/Stats';
import About from '../components/About';
import CompanyLogos from '../components/CompanyLogos';
import PlacementHighlights from '../components/PlacementHighlights';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <MissionVision />
      <Stats />
      <About />
      <CompanyLogos />
      <PlacementHighlights />
      <Testimonials />
    </>
  );
};

export default Home;