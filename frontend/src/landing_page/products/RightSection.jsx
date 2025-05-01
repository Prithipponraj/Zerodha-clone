import React from "react";

function RightSection({ imageUrl, productName, productDescrption, learnMore }) {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-5 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold">{productName}</h1>
          <p className="text-gray-600 mt-4">{productDescrption}</p>
          <a
            href={learnMore}
            className="text-blue-500 hover:underline mt-4 inline-flex items-center"
          >
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </a>
        </div>
        <div className="w-full lg:w-1/2 p-5">
          <img src={imageUrl} alt={productName} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
