
import './App.css'
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

   const [isBannerVisible, setIsBannerVisible] = useState(true);
  

  return (
    <>
      <div>
      <Navbar setIsBannerVisible={setIsBannerVisible} />
      <main className="min-h-screen">
        <Outlet context={{ isBannerVisible, setIsBannerVisible }} />
      </main>
      <Footer />
    </div> 
     
      
    </>
  )
}

export default App
