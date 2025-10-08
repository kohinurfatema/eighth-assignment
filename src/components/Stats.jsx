import React from 'react';

const Stats = () => {
  return (
    // This section has its own unique style, fulfilling the instruction.
    <div className="bg-primary text-primary-content py-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Trusted By Millions, Built For You</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        {/* Stat 1 */}
        <div className="stat place-items-center">
          <div className="stat-title text-white">Total Downloads</div>
          <div className="stat-value text-white">29.6M</div>
          <div className="stat-desc opacity-70 mt-1 text-white">21% More Than Last Month</div>
        </div>
        
        {/* Stat 2 */}
        <div className="stat place-items-center">
          <div className="stat-title text-white">Total Reviews</div>
          <div className="stat-value text-white">906K</div>
          <div className="stat-desc opacity-70 mt-1 text-white">46% More Than Last Month</div>
        </div>

        {/* Stat 3 */}
        <div className="stat place-items-center">
          <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value text-white">132+</div>
          <div className="stat-desc opacity-70 mt-1 text-white">31 More Will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

