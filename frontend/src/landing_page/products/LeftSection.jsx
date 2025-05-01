import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDesrption,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-5">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="w-full md:w-1/2 p-5 mt-10">
          <h1 className="text-2xl font-bold">{productName}</h1>
          <p className="mt-4 text-gray-600">{productDesrption}</p>
          <div className="mt-5 space-x-10">
            <a
              href={tryDemo}
              className="text-blue-500 hover:underline"
            >
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              className="text-blue-500 hover:underline"
            >
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-5 flex items-center space-x-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
