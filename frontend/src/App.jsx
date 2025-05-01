import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import SupportPage from "./landing_page/support/SupportPage";
import SignupPage from "./landing_page/signup/Signup";
import OpenAccount from "./landing_page/OpenAccount";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
