
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[200px]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 rounded-full border-4 border-t-tiktok-pink border-r-tiktok-blue border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full rotate-45">
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-r-transparent border-b-tiktok-pink border-l-tiktok-blue animate-spin"></div>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300 animate-pulse-subtle">Loading data...</p>
    </div>
  );
};

export default Loader;
