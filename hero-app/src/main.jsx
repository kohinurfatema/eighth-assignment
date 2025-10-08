import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'; 
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     children: [
      {
        index: true,
        loader:() => fetch('/data.json'),
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
