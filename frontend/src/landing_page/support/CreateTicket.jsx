import React from "react";

function CreateTicket() {
  return (
    <div className="container mx-auto mt-10 px-5">
      <h1 className="text-2xl font-semibold mb-8">
        To create a ticket, select a relevant topic
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-5 border rounded-lg shadow-md bg-white">
            <h4 className="text-lg font-medium flex items-center gap-2 mb-4">
              <i className="fa fa-plus-circle text-blue-500" aria-hidden="true"></i> 
              Account Opening
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Online Account Opening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Offline Account Opening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Company, Partnership and HUF Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Opening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  NRI Account Opening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Charges at Zerodha
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Zerodha IDFC FIRST Bank 3-in-1 Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
