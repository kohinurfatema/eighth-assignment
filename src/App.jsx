import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast'; // 1. Import Toaster

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div>
      <Navbar setIsBannerVisible={setIsBannerVisible} />
      <main>
        <Outlet context={{ isBannerVisible, setIsBannerVisible }} />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} /> {/* 2. Add Toaster component */}
    </div>
  );
}

export default App;