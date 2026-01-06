import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/Image/newlogo.png";

const Popup = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-md rounded-3xl bg-white/95
        shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]
        animate-popup overflow-hidden">

                {/* Gradient Top Bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#ec2324] via-orange-400 to-yellow-400"></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full
          bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500 transition"
                >
                    <FaTimes />
                </button>

                {/* Content */}
                <div className="p-8">
                    <img src={logo} alt="logo" className="h-[50px] mx-auto mb-2" />

                    <h3 className="text-2xl font-bold text-center text-gray-800">
                        Enquiry for Parts
                    </h3>
                    <p className="text-center text-sm text-gray-500 mb-3">
                        Tell us what you need — we’ll get back fast 🚀
                    </p>

                    <form className="space-y-4">
                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
              bg-gray-50 focus:bg-white
              focus:ring-2 focus:ring-[#ec2324]/30
              focus:border-[#ec2324]
              outline-none transition"
                        />

                        {/* Mobile Number */}
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
              bg-gray-50 focus:bg-white
              focus:ring-2 focus:ring-[#ec2324]/30
              focus:border-[#ec2324]
              outline-none transition"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
              bg-gray-50 focus:bg-white
              focus:ring-2 focus:ring-[#ec2324]/30
              focus:border-[#ec2324]
              outline-none transition"
                        />

                        {/* Vehicle Type */}
                        <select
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
              bg-gray-50 focus:bg-white
              focus:ring-2 focus:ring-[#ec2324]/30
              focus:border-[#ec2324]
              outline-none transition"
                        >
                            <option value="">Select Vehicle Type</option>
                            <option>Car</option>
                            <option>Heavy Commercial Vehicle</option>
                            <option>JCB / Earth Moving</option>
                        </select>

                        {/* Requirement */}
                        <textarea
                            rows="3"
                            placeholder="Requirement"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
              bg-gray-50 focus:bg-white
              focus:ring-2 focus:ring-[#ec2324]/30
              focus:border-[#ec2324]
              outline-none resize-none transition"
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-[#ec2324] to-orange-500
              hover:shadow-lg hover:shadow-red-500/30
              hover:scale-[1.02] transition-all duration-300"
                        >
                            Submit Enquiry
                        </button>
                    </form>
                </div>
            </div>

            {/* Animation */}
            <style>
                {`
          @keyframes popup {
            0% {
              transform: scale(0.9) translateY(30px);
              opacity: 0;
            }
            100% {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
          }
          .animate-popup {
            animation: popup 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
            </style>
        </div>
    );
};

export default Popup;
