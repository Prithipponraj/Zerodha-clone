import React from "react";

function Hero() {
  return (
    <section className="w-full bg-gray-50" id="supportHero">
      <div className="p-5 bg-gray-100" id="supportWrapper">
        <h4 className="text-xl font-semibold">Support Portal</h4>
        <a href="#" className="text-blue-500 hover:underline">
          Track Tickets
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 m-3">
        <div className="p-3">
          <h1 className="text-xl font-semibold mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="w-full p-2 border rounded-md mb-4"
          />
          <div className="space-y-2">
            <a href="#" className="block text-blue-500 hover:underline">
              Track account opening
            </a>
            <a href="#" className="block text-blue-500 hover:underline">
              Track segment activation
            </a>
            <a href="#" className="block text-blue-500 hover:underline">
              Intraday margins
            </a>
            <a href="#" className="block text-blue-500 hover:underline">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-xl font-semibold mb-4">Featured</h1>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
