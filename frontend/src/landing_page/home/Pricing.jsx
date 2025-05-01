import React from "react";

function Pricing() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold mb-3">Unbeatable pricing</h1>
          <p className="text-gray-600">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-blue-500 hover:underline inline-flex items-center mt-3">
            See pricing <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
        </div>

        {/* Spacer */}
        <div className="hidden md:block w-1/6"></div>

        {/* Pricing Boxes */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-center gap-6">
            {/* Free Plan */}
            <div className="border rounded-lg p-5 text-center shadow-sm">
              <h1 className="text-3xl font-bold mb-3">₹0</h1>
              <p className="text-gray-600">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            {/* Paid Plan */}
            <div className="border rounded-lg p-5 text-center shadow-sm">
              <h1 className="text-3xl font-bold mb-3">₹20</h1>
              <p className="text-gray-600">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
