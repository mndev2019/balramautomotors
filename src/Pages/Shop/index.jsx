import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">

        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center
          rounded-full bg-gradient-to-r from-[#ec2324] to-orange-500 text-white text-3xl">
          <FaShoppingBag />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Shop Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mb-8">
          We’re working hard to bring you the best auto parts shopping experience.
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="block w-full bg-[#ec2324] text-white py-3 rounded-xl
          font-semibold hover:scale-105 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Shop;
