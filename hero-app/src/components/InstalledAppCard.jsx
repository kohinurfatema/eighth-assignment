import React from 'react';

// Reusable icons for the card
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

// This component receives the app details and a function to handle the uninstall action
const InstalledAppCard = ({ app, onUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className="card card-side bg-base-100 shadow-md p-4 flex-col sm:flex-row">
      <figure className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 mx-auto sm:mx-0">
        <img src={image} alt={title} className="rounded-2xl w-full h-full object-cover" />
      </figure>
      <div className="card-body p-2 sm:p-4 justify-between">
        <div>
          <h2 className="card-title text-lg">{title}</h2>
          <div className="flex items-center gap-4 text-xs text-base-content/70 mt-1">
            <span className="flex items-center"><DownloadIcon /> {(downloads / 1000000).toFixed(1)}M</span>
            <span className="flex items-center"><StarIcon /> {ratingAvg}</span>
            <span>{size} MB</span>
          </div>
        </div>
      </div>
       <div className="card-actions justify-center sm:justify-end items-center mt-4 sm:mt-0">
          {/* When this button is clicked, it calls the onUninstall function with the app's ID */}
          <button onClick={() => onUninstall(id, title)} className="btn btn-error btn-outline">
            Uninstall
          </button>
        </div>
    </div>
  );
};

export default InstalledAppCard;
