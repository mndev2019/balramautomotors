import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/Image/newlogo.png";
import { BaseUrl } from "../API/BaseUrl"; // Apne project path ke according change karein

const Popup = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        vehicleType: "",
        requirement: "",
    });

    const [loading, setLoading] = useState(false);

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);

            const response = await axios.post(
                `${BaseUrl}/enquiry`,
                formData
            );

            if (response.data.success) {
                toast.success("Enquiry submitted successfully!");

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    vehicleType: "",
                    requirement: "",
                });

                onClose();
            } else {
                toast.error(
                    response.data.message || "Failed to submit enquiry."
                );
            }
        } catch (error) {
            console.error("Enquiry submission error:", error);

            toast.error(
                error.response?.data?.message ||
                "Unable to submit enquiry. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={loading ? undefined : onClose}
            ></div>

            {/* Modal */}
            <div
                className="relative w-full max-w-md rounded-3xl bg-white/95
                shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]
                animate-popup overflow-hidden"
            >

                {/* Gradient Top Bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#ec2324] via-orange-400 to-yellow-400"></div>

                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    disabled={loading}
                    className="absolute top-4 right-4 p-2 rounded-full
                    bg-gray-100 hover:bg-red-100 text-gray-600
                    hover:text-red-500 transition disabled:opacity-50"
                >
                    <FaTimes />
                </button>

                {/* Content */}
                <div className="p-8">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-[50px] mx-auto mb-2"
                    />

                    <h3 className="text-2xl font-bold text-center text-gray-800">
                        Enquiry for Parts
                    </h3>

                    <p className="text-center text-sm text-gray-500 mb-3">
                        Tell us what you need — we’ll get back fast 🚀
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Full Name */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
                            bg-gray-50 focus:bg-white
                            focus:ring-2 focus:ring-[#ec2324]/30
                            focus:border-[#ec2324]
                            outline-none transition disabled:opacity-60"
                        />

                        {/* Mobile Number */}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
                            bg-gray-50 focus:bg-white
                            focus:ring-2 focus:ring-[#ec2324]/30
                            focus:border-[#ec2324]
                            outline-none transition disabled:opacity-60"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
                            bg-gray-50 focus:bg-white
                            focus:ring-2 focus:ring-[#ec2324]/30
                            focus:border-[#ec2324]
                            outline-none transition disabled:opacity-60"
                        />

                        {/* Vehicle Type */}
                        <select
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
                            bg-gray-50 focus:bg-white
                            focus:ring-2 focus:ring-[#ec2324]/30
                            focus:border-[#ec2324]
                            outline-none transition disabled:opacity-60"
                        >
                            <option value="">Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="heavy commercial vehicle">
                                Heavy Commercial Vehicle
                            </option>
                            <option value="jcb/earth moving">
                                JCB / Earth Moving
                            </option>
                        </select>

                        {/* Requirement */}
                        <textarea
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Requirement"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3
                            bg-gray-50 focus:bg-white
                            focus:ring-2 focus:ring-[#ec2324]/30
                            focus:border-[#ec2324]
                            outline-none resize-none transition disabled:opacity-60"
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-xl text-white font-semibold
                            transition-all duration-300
                            ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-[#ec2324] to-orange-500 hover:shadow-lg hover:shadow-red-500/30 hover:scale-[1.02]"
                                }`}
                        >
                            {loading ? "Submitting..." : "Submit Enquiry"}
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

