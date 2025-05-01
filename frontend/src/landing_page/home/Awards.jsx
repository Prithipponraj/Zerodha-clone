import React from "react";

function Awards() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" className="w-full" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-5 md:mt-10">
          <h1 className="text-3xl font-bold mb-5">Largest stock broker in India</h1>
          <p className="text-gray-600 mb-8">
            1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India
            daily by trading and investing in:
          </p>

          {/* Investment Options */}
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <ul className="list-disc ml-5 space-y-3">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="list-disc ml-5 space-y-3">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="mt-8 w-[90%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
