import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-5 mt-5">
        <h1 className="text-center text-gray-500 text-2xl">People</h1>
      </div>
      <div className="flex flex-col md:flex-row py-5 text-gray-500 text-lg">
        <div className="md:w-1/2 flex flex-col items-center p-5">
          <img
            src="media/images/nithinKamath.jpg"
            className="rounded-full w-1/2"
            alt="Nithin Kamath"
          />
          <h4 className="mt-5 text-lg font-semibold">Nithin Kamath</h4>
          <h6 className="text-base">Founder, CEO</h6>
        </div>
        <div className="md:w-1/2 p-5 text-base">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha
            has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Homepage
            </Link>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/Nithin0dha"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
