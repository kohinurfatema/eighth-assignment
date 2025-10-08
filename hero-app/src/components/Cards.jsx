import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ data, onShowAll }) => {
  
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowAllClick = () => {
    
    setVisibleCount(data.length);
    
    
    if (onShowAll) {
      onShowAll();
    }
  };

  return (

    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="text-lg text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {data.slice(0, visibleCount).map((card) => (
        
            <Card key={card.id} card={card} />
          ))}
        </div>
        
        {visibleCount < data.length && (
          <div className="text-center mt-12">
            <button onClick={handleShowAllClick} className="btn btn-primary">
              Show All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;

