import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import AllApps from './pages/AllApps.jsx';
import AppDetails from './pages/AppDetails.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import InstallationPage from './pages/InstallationPage.jsx'; // 1. Import the new page
import appErrorImage from './assets/assets/App-Error.png';
import { createBrowserRouter, RouterProvider, Link } from "react-router";

const AppNotFoundError = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-4">
      <img src={appErrorImage} alt="App Not Found" className="max-w-sm w-full" />
      <h1 className="text-4xl font-bold mt-8">App Not Found</h1>
      <p className="text-lg text-base-content/70 mt-2">Sorry, we couldn't find the app you're looking for.</p>
      <Link to="/apps" className="btn btn-primary mt-6">See All Apps</Link>
    </div>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader:() => fetch('/data.json'),
        element: <Home />,
      },
      {
        path: "/app/:appId",
        element: <AppDetails />,
        errorElement: <AppNotFoundError />,
        loader: async ({ params }) => {
          const response = await fetch('/data.json');
          const apps = await response.json();
          const app = apps.find(app => app.id === parseInt(params.appId));
          if (!app) {
            throw new Response("Not Found", { status: 404 });
          }
          return app;
        },
      },
      {
        path: "/apps",
        loader: () => fetch('/data.json'),
        element: <AllApps />,
      },
      
      {
        path: "/installation",
        loader: () => fetch('/data.json'),
        element: <InstallationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)