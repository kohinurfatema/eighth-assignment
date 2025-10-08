import React from 'react';
import { useNavigate } from 'react-router'; // 1. Import the useNavigate hook
import Card from './Card';

// The component now only needs the 'data' prop
const Cards = ({ data }) => {
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  const handleShowAllClick = () => {
    // 3. This function now navigates to the '/apps' page
    navigate('/apps');
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="text-lg text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* 4. This now permanently shows only the first 8 apps */}
          {data.slice(0, 8).map((card) => (
            <Card key={card.id} app={card} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button onClick={handleShowAllClick} className="btn btn-primary">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;

