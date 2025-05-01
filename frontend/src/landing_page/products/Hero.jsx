import React from "react";

function Hero() {
  return (
    <div className="border-b mb-10">
      <div className="text-center mt-10 p-10">
        <h1 className="text-gray-500 text-3xl font-semibold">Technology</h1>
        <h3 className="mt-4 text-gray-500 text-lg">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-4 mb-10">
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            className="text-blue-500 hover:underline"
          >
            investment offerings <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
