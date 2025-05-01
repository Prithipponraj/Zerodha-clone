import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-5 md:mb-0">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold mt-2">
            Kiaan couldn’t find that page
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            We couldn’t find the page you were looking for. Visit{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline"
            >
              Zerodha’s home page
            </Link>.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <img
            src="media/images/404 Kiaan.jpg"
            alt="404 Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
