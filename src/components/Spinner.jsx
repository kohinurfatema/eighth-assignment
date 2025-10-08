import React from 'react';

const Spinner = () => {
  return (

    <div className="fixed top-0 left-0 w-full h-full bg-base-100 bg-opacity-80 flex items-center justify-center z-50">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default Spinner;