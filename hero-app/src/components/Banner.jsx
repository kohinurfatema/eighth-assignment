import React from 'react';
import hero from '../assets/assets/hero.png'

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div>
                <p className='text-4xl font-bold'>We Build <br /> <span className='text-blue-700'>Productive</span> Apps</p>
                <p className='mt-4 text-gray-600'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-3 justify-center items-center mt-5'>
                    <button className="btn">Google play</button>
                    <button className="btn">App store</button>
                </div>
                   <div className=''>
                <img className='w-[100] h-[250] justify-center items-center mt-10' src={hero} alt="" />
                </div>

                <div className="bg-primary text-primary-content py-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Trusted By Millions, Built For You</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        <div className="stat place-items-center">
            <div className="stat-title text-white">Total Downloads</div>
          <div className="stat-value text-white">29.6M</div>
          <div className="stat-desc opacity-70 mt-1 text-white">21% More Than Last Month</div>
        </div>
        
        <div className="stat place-items-center">
             <div className="stat-title text-white">Total Reviews</div>
          <div className="stat-value text-white">906K</div>
          <div className="stat-desc opacity-70 mt-1 text-white">46% More Than Last Month</div>
        </div>

        <div className="stat place-items-center">
             <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value text-white">132+</div>
          <div className="stat-desc opacity-70 mt-1 text-white">31 More Will Launch</div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Banner;