import React from "react";

function Universe() {
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">The Zerodha Universe</h1>
        <p className="text-gray-600 mt-3">
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="text-center">
            <img src="media/images/smallcaselogo.png" alt="Smallcase" className="mx-auto" />
            <p className="text-gray-500 mt-2 text-sm">Thematic investment platform</p>
          </div>
          <div className="text-center">
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              className="mx-auto w-2/5"
            />
            <p className="text-gray-500 mt-2 text-sm">Algo & strategy platform</p>
          </div>
          <div className="text-center">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="mx-auto w-3/5"
            />
            <p className="text-gray-500 mt-2 text-sm">Options trading platform</p>
          </div>
          <div className="text-center">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha Fundhouse"
              className="mx-auto w-2/5"
            />
            <p className="text-gray-500 mt-2 text-sm">Asset management</p>
          </div>
          <div className="text-center">
            <img
              src="media/images/tijori.svg"
              alt="Tijori"
              className="mx-auto w-2/5"
            />
            <p className="text-gray-500 mt-2 text-sm">Fundamental research platform</p>
          </div>
          <div className="text-center">
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto"
              className="mx-auto w-2/5"
            />
            <p className="text-gray-500 mt-2 text-sm">Insurance</p>
          </div>
        </div>
        <button className="mt-10 px-6 py-2 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;
