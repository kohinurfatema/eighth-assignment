import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import toast from 'react-hot-toast';
import InstalledAppCard from '../components/InstalledAppCard';



const getInstalledApps = () => {
    const installed = localStorage.getItem('installedApps');
    return installed ? JSON.parse(installed) : [];
};

const removeInstalledApp = (appId) => {
    let installed = getInstalledApps();
    installed = installed.filter(id => id !== appId);
    localStorage.setItem('installedApps', JSON.stringify(installed));
};

const InstallationPage = () => {
    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    
    const [sortOrder, setSortOrder] = useState('downloads_desc');

    useEffect(() => {
        const installedIds = getInstalledApps();
        const apps = allApps.filter(app => installedIds.includes(app.id));
        setInstalledApps(apps);
    }, [allApps]);

    const handleUninstall = (appId, title) => {
        removeInstalledApp(appId);
        setInstalledApps(currentApps => currentApps.filter(app => app.id !== appId));
        toast.error(`${title} has been uninstalled.`);
    };
    
    
    const sortedApps = [...installedApps].sort((a, b) => {
        switch (sortOrder) {
            case 'downloads_desc':
                return b.downloads - a.downloads; 
            case 'downloads_asc':
                return a.downloads - b.downloads; 
            default:
                return 0;
        }
    });

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Your Installed Apps</h1>
                    <p className="text-lg text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <p className="font-semibold text-lg">{sortedApps.length} Apps Found</p>
                    <div className="form-control">
        
                         <select 
                            className="select select-bordered"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="downloads_desc">Sort by Downloads (High-Low)</option>
                            <option value="downloads_asc">Sort by Downloads (Low-High)</option>
                        </select>
                    </div>
                </div>
                
                {sortedApps.length > 0 ? (
                    <div className="space-y-6">
                        {sortedApps.map(app => (
                           <InstalledAppCard key={app.id} app={app} onUninstall={handleUninstall} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-xl mt-12">You have not installed any apps yet.</p>
                )}
            </div>
        </div>
    );
};

export default InstallationPage;