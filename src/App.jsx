import React, { useState } from 'react';
import { Outlet, useNavigation } from 'react-router'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Spinner from './components/Spinner'; 

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const navigation = useNavigation(); 

  return (
    <div>
    
      {navigation.state === 'loading' && <Spinner />}
      
      <Navbar setIsBannerVisible={setIsBannerVisible} />
      <main>
        <Outlet context={{ isBannerVisible, setIsBannerVisible }} />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;