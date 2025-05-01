import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto mt-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
          <div>
            <img
              src="media/images/logo.svg"
              alt="logo"
              className="mb-3 w-1/2"
            />
            <p className="mb-4 text-gray-600">
              &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="flex gap-3 text-gray-500 text-xl">
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-square-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
            <hr className="my-4" />
            <div className="flex gap-3 text-gray-500 text-xl">
              <i className="fab fa-youtube"></i>
              <i className="fas fa-comment"></i>
              <i className="fab fa-telegram"></i>
            </div>
          </div>

          <div>
            <p className="font-semibold">Company</p>
            <div className="flex flex-col space-y-2 text-gray-600">
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Pricing</a>
              <a href="#">Referral programme</a>
              <a href="#">Careers</a>
              <a href="#">Zerodha.tech</a>
              <a href="#">Press & media</a>
              <a href="#">Zerodha Cares (CSR)</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Support</p>
            <div className="flex flex-col space-y-2 text-gray-600">
              <a href="#">Contact us</a>
              <a href="#">Support portal</a>
              <a href="#">Z-Connect blog</a>
              <a href="#">List of charges</a>
              <a href="#">Downloads & resources</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Account</p>
            <div className="flex flex-col space-y-2 text-gray-600">
              <a href="#">Open an account</a>
              <a href="#">Fund transfer</a>
            </div>
          </div>
        </div>

        <div className="mt-5 text-sm text-gray-500">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
            NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address:
            Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
            Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India.
          </p>
          <br />
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. Attention
            investors: Stock brokers can accept securities as margins from
            clients only by way of pledge in the depository system w.e.f
            September 01, 2020.
          </p>
        </div>

        <div className="mt-2 text-gray-500 flex flex-wrap justify-center gap-4 text-sm">
          <p>NSE</p>
          <p>BSE</p>
          <p>MCX</p>
          <p>Terms & Conditions</p>
          <p>Policies and procedures</p>
          <p>Privacy Policy</p>
          <p>Disclosure</p>
          <p>For investors Attention</p>
          <p>Investors charter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
