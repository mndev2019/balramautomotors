import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobeAsia,
  FaUser,
  FaPen,
  FaPaperPlane,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-toastify";
import { BaseUrl } from "../../API/BaseUrl"; // apne path ke according change karein

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    vehicleType: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
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

        // Reset form after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "",
          vehicleType: "",
        });
      }
    } catch (error) {
      console.error("Enquiry submission error:", error);

      toast.error(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">

      {/* HERO STRIP */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white">
          <span className="inline-block mb-4 text-sm tracking-widest font-bold text-[#ec2324] uppercase">
            Contact Us
          </span>

          <h1 className="sm:text-4xl text-xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Global Reach in{" "}
            <span className="text-[#ec2324]">
              Commercial & Earth Moving
            </span>
            <br /> Vehicle Spare Parts Supply
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl">
            Operating across India, Sri Lanka, Nepal, and Bangladesh with a
            strong local presence and dependable service.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:py-28 py-10">

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">

          <div
            className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition"
            data-aos="flip-up"
          >
            <FaGlobeAsia className="text-[#ec2324] text-3xl mb-4" />

            <h3 className="text-xl font-bold text-gray-900">
              International Presence
            </h3>

            <p className="mt-3 text-gray-600">
              Serving heavy vehicle markets across
              <strong> India, Sri Lanka, Nepal & Bangladesh</strong>.
            </p>
          </div>

          <div
            className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition"
            data-aos="flip-up"
          >
            <FaMapMarkerAlt className="text-[#ec2324] text-3xl mb-4" />

            <h3 className="text-xl font-bold text-gray-900">
              Branch Office
            </h3>

            <p className="mt-3 text-gray-600">
              123/136, 1st Floor Gdanian Purwa Kanpur 208012, Uttar Pradesh
              India
            </p>
          </div>

          <div
            className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition"
            data-aos="flip-up"
          >
            <FaPhoneAlt className="text-[#ec2324] text-3xl mb-4" />

            <h3 className="text-xl font-bold text-gray-900">
              Call Support
            </h3>

            <a
              href="tel:+919450292127"
              className="mt-3 text-gray-600 hover:text-[#ec2324] transition"
            >
              +91 9450292127
            </a>
          </div>

          <div
            className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition"
            data-aos="flip-up"
          >
            <FaEnvelope className="text-[#ec2324] text-3xl mb-4" />

            <h3 className="text-xl font-bold text-gray-900">
              Email Support
            </h3>

            <a
              href="mailto:info@blramautomotive.in"
              className="mt-3 text-gray-600"
            >
              info@blramautomotive.in
            </a>
          </div>
        </div>

        {/* MAP + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-stretch">
          {/* <div className="grid grid-cols-1  gap-16 items-stretch"> */}

          {/* MAP */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

            <iframe
              title="Blram Automotive - Kanpur Branch"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8141072660555!2d80.30070189999999!3d26.461720399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c474c8e8eb3a1%3A0x5095174142f43c1a!2sblram%20automotive!5e0!3m2!1sen!2sin!4v1792564671619!5m2!1sen!2sin"
              className="w-full h-full min-h-[460px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>


            {/* <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-xl shadow-lg border-l-4 border-[#ec2324]">
              <p className="text-sm font-bold text-gray-900">
                
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Kanpur Branch Office
              </p>
            </div> */}
          </div>


          {/* FORM */}
          <div className="lg:col-span-2 relative bg-white border border-gray-200 rounded-3xl shadow-2xl md:p-10 p-5 overflow-hidden">

            {/* Decorative Elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#ec2324]/20 rounded-full"></div>

            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#ec2324]/10 rounded-full"></div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 relative z-10">
              Request a Call Back
            </h3>

            <p className="text-gray-500 mb-8 relative z-10">
              Share your details and our team will reach out shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >

              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30 
                  outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30 
                  outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Vehicle Type */}
              <div className="relative">
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-300 
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30 
                  outline-none transition text-gray-700 bg-white
                  disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30 
                  outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Requirement */}
              <div className="relative">
                <FaPen className="absolute left-4 top-4 text-gray-400" />

                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Requirement"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30 
                  outline-none transition resize-none
                  disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl 
                text-white font-bold shadow-lg transition-all duration-300
                ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#ec2324] to-red-600 hover:from-black hover:to-gray-900 hover:shadow-2xl"
                  }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request <FaPaperPlane />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;