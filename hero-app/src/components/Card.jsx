import React from 'react';
import { Link } from 'react-router';


const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

const Card = ({ app }) => {
  const { title, downloads, ratingAvg, id,image } = app;

  return (
    <Link to={`/app/${id}`} className="card card-compact bg-base-100 shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
      <figure className="px-4 pt-4">
        <img src={image} alt={title} className="rounded-xl h-40 object-cover w-full" />
      </figure>
      <div className="card-body items-start text-left">
        <h2 className="card-title text-base">{title}</h2>
        <div className="flex items-center text-sm text-gray-500 w-full justify-between mt-2">
          <div className="badge bg-gray-200 text-green-600 badge-sm flex items-center">
            <DownloadIcon />
            {`${(downloads / 1000000).toFixed(1)}M`}
          </div>
          <div className="flex items-center gap-1 bg-orange-300 text-orange-500 rounded-xl p-1">
            <span>{ratingAvg}</span>
            <StarIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;