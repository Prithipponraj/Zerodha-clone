import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src="media/images/logo.svg"
            alt="logo"
            className="w-1/4"
          />
        </Link>
        <button
          className="text-gray-500 md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="hidden md:flex space-x-6">
          <ul className="flex items-center space-x-4">
          <li>
  <a
    href={import.meta.env.VITE_SIGNUP_URL} // Dynamically fetch the URL from .env
    className="text-gray-800 hover:text-blue-600 transition"
  >
    Signup
  </a>
</li>

            <li>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                Support
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
                <i className="fas fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
