import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

// --- LocalStorage Helper Functions ---

// Gets the list of installed app IDs from localStorage
const getInstalledApps = () => {
    const installed = localStorage.getItem('installedApps');
    // If nothing is in localStorage, return an empty array
    return installed ? JSON.parse(installed) : [];
};

// Adds a new app ID to the list in localStorage
const addInstalledApp = (appId) => {
    const installed = getInstalledApps();
    if (!installed.includes(appId)) {
        const updatedInstalled = [...installed, appId];
        localStorage.setItem('installedApps', JSON.stringify(updatedInstalled));
    }
};


const AppDetails = () => {
  const app = useLoaderData();
  const { id, title, companyName, description, downloads, ratingAvg, reviews, size, ratings, image } = app;

  // State to track if the app is installed
  const [isInstalled, setIsInstalled] = useState(false);

  // --- Check Installation Status on Page Load ---
  useEffect(() => {
    const installedApps = getInstalledApps();
    // Check if the current app's ID is in the saved list
    if (installedApps.includes(id)) {
      setIsInstalled(true);
    }
  }, [id]); // This effect runs whenever the app 'id' changes

  // Handler for the install button
  const handleInstall = () => {
    addInstalledApp(id); // Save the app ID to localStorage
    setIsInstalled(true);
    toast.success(`${title} installed successfully!`);
  };

  const maxRatingCount = Math.max(...ratings.map(r => r.count));

  return (
    <div className="bg-base-200 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">← Back to Home</Link>
        </div>

        {/* --- Top Section --- */}
        <div className="card bg-base-100 shadow-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <img src={image} alt={title} className="w-32 h-32 md:w-40 md:h-40 rounded-3xl" />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-1">Developed by <a href="#" className="text-primary link-hover">{companyName}</a></p>
              <div className="grid grid-cols-3 gap-4 my-6 text-center">
                <div>
                  <div className="text-2xl font-bold">{(downloads / 1000000).toFixed(1)}M</div>
                  <div className="text-xs text-base-content/60">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{ratingAvg}</div>
                  <div className="text-xs text-base-content/60">Average Ratings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{(reviews / 1000).toFixed(0)}K</div>
                  <div className="text-xs text-base-content/60">Total Reviews</div>
                </div>
              </div>
              
              {/* Updated Install Button with state and localStorage logic */}
              <button 
                className="btn btn-success w-full sm:w-auto"
                onClick={handleInstall}
                disabled={isInstalled}
              >
                {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        {/* --- Ratings & Description Sections (no changes here) --- */}
        <div className="card bg-base-100 shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Ratings</h2>
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
              <BarChart data={ratings} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={50} />
                <Tooltip cursor={{fill: 'rgba(200,200,200,0.1)'}} />
                <Bar dataKey="count" fill="#f97316" barSize={15} radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-base-content/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;