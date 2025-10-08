import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

const Home = () => {
  const allApps = useLoaderData();

  return (
    <div>
      {/* The Banner is now always visible */}
      <Banner />
      
      {/* We only need to pass the data to the Cards component */}
      <Cards data={allApps} />
    </div>
  );
};

export default Home;

