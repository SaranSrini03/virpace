// pages/index.tsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#06402B]  font-[family-name:var(--font-geist-mono)]  text-white text-center">
      <h1 className="text-6xl font-bold mb-4 ">Welcome to Virpace.</h1>
      <p className="text-2xl mb-6 text-gray-200">A virtual study web app</p>
      <button className="px-10 py-3  text-lg text-[#06402B] bg-white rounded-full hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Home;
