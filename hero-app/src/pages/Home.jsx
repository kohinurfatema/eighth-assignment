import React from 'react';
import { useState } from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data=useLoaderData();

 const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleShowAll = () => {
    setIsBannerVisible(false); 
  };

  return (
    <div className="text-center p-10">
       {isBannerVisible && <Banner />}
      <Cards data={data} onShowAll={handleShowAll}></Cards>
    </div>
  );
};

export default Home;