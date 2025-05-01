import React from "react";

function Stats() {
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-wrap p-5">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-2xl font-bold mb-5">Trust with confidence</h1>

          <div className="mb-5">
            <h2 className="text-lg font-semibold">Customer-first always</h2>
            <p className="text-gray-600">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="text-lg font-semibold">No spam or gimmicks</h2>
            <p className="text-gray-600">
              No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your
              pace, the way you like.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="text-lg font-semibold">The Zerodha universe</h2>
            <p className="text-gray-600">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
              services specific to your needs.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Do better with money</h2>
            <p className="text-gray-600">
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you
              do better with your money.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-5">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="w-[90%] mx-auto" />

          <div className="text-center mt-5 space-x-5">
            <a
              href="#"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Explore our products <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
            <a
              href="#"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Try Kite Demo <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
