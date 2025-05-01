import React from "react";

function Education() {
  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src="media/images/education.svg" alt="Education" className="w-3/4 mx-auto md:mx-0" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-2xl font-bold mb-4">Free and open market education</h1>
          <p className="text-gray-600 mb-4">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-blue-500 hover:underline inline-flex items-center mb-6">
            Varsity <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
          <p className="text-gray-600 mt-6">
            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
          </p>
          <a href="#" className="text-blue-500 hover:underline inline-flex items-center mt-2">
            TradingQ&A <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
