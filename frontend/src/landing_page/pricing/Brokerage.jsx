import React from "react";

function Brokerage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row py-5 mt-5 text-center border-t border-gray-300">
        <div className="md:w-2/3 px-4">
          <h3 className="text-blue-500 text-lg mb-4">
            <a href="#" className="hover:underline">
              Brokerage Calculator
            </a>
          </h3>
          <ul className="text-gray-500 text-left leading-relaxed space-y-2 text-sm">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note.
              Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order
              instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 px-4">
          <h3 className="text-blue-500 text-lg">
            <a href="#" className="hover:underline">
              List Of Charges
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
