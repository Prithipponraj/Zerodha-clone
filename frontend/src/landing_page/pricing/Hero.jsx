import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="border-b border-gray-300 py-5 mt-5 text-center">
        <h1 className="text-2xl font-bold">Pricing</h1>
        <h3 className="text-gray-500 text-lg mt-2">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="flex flex-wrap justify-center py-5 mt-5 text-center gap-8">
        <div className="w-full sm:w-1/3 px-4">
          <img src="media/images/pricingEquity.svg" alt="Equity Pricing" className="mx-auto" />
          <h1 className="text-lg font-semibold mt-4">Free equity delivery</h1>
          <p className="text-gray-500 mt-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="w-full sm:w-1/3 px-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday Trades" className="mx-auto" />
          <h1 className="text-lg font-semibold mt-4">Intraday and F&O trades</h1>
          <p className="text-gray-500 mt-2">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
            currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="w-full sm:w-1/3 px-4">
          <img src="media/images/pricingEquity.svg" alt="Mutual Funds Pricing" className="mx-auto" />
          <h1 className="text-lg font-semibold mt-4">Free equity delivery</h1>
          <p className="text-gray-500 mt-2">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
