import React from 'react';
import hero from '../assets/assets/hero.png';
import Stats from './Stats'; // 1. Import the new Stats component

const GooglePlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor"><path d="M3 22v-20l18 10-18 10z"/></svg>
);
const AppStoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor"><path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5 4.25-9.5 9.5-9.5zm0 1.5c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 3h2v6h-2v-6zm0 8h2v2h-2v-2z"/></svg>
);

const Banner = () => {
    return (
        <>
            {/* --- Banner Section --- */}
            <div className='bg-base-200 py-16 px-4'>
                <div className="text-center">
                    <h1 className='text-4xl md:text-5xl font-bold'>We Build <br /> <span className='text-primary'>Productive</span> Apps</h1>
                    <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    
                    <div className='flex gap-4 justify-center items-center mt-5'>
                        <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <GooglePlayIcon />
                            Google Play
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <AppStoreIcon />
                            App Store
                        </a>
                    </div>
                    
                    <div className='mt-10 flex justify-center'>
                        <img className='rounded-lg' src={hero} alt="App screenshot" />
                    </div>
                </div>
            </div>

            {/* 2. Use the new Stats component here */}
            <Stats />
        </>
    );
};

export default Banner;