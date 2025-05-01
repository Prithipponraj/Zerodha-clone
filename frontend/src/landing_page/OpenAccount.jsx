import React from "react";

function OpenAccount() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 mb-4">Open a Zerodha account</h1>
        <p className="text-lg text-gray-600 mb-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
