import React from 'react';
import { Link, useRouteError } from 'react-router';
import errorImage from '../assets/assets/error-404.png'; // Make sure this path is correct

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // It's good practice to log the error for debugging

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-4">
      <img src={errorImage} alt="404 Not Found" className="max-w-sm w-full" />
      <h1 className="text-4xl font-bold mt-8">Oops, page not found!</h1>
      <p className="text-lg text-base-content/70 mt-2">
        The page you are looking for is not available.
      </p>
      <Link to="/" className="btn btn-primary mt-6">Go Back!</Link>
    </div>
  );
};

export default ErrorPage;
