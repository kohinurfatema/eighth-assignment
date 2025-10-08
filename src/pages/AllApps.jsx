import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';

const AllApps = () => {
  const allApps = useLoaderData();
  
  // State for live search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // Case-insensitive filtering by title
  const filteredApps = allApps.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
    
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Our All Applications</h1>
          <p className="text-lg text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        {/* Displays total number of apps and the search bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="font-semibold text-lg">{filteredApps.length} Apps Found</p>
          <div className="form-control w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search Apps" 
              className="input input-bordered w-full md:w-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>

        {/* Renders cards or a "No App Found" message */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredApps.map(app => (
              <Card key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl mt-12">No apps found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default AllApps;

