import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5 mx-auto" />
        <h1 className="text-4xl font-bold mt-5">Invest in everything</h1>
        <p className="text-lg text-gray-600 mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg mt-5 hover:bg-blue-600 transition duration-300">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Hero;
