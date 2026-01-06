import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobeAsia,
  FaUser,
  FaPen,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
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
          <p className="mt-6 text-gray-300 max-w-2xl ">
            Operating across India, Sri Lanka, Nepal, and Bangladesh with a
            strong local presence and dependable service.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:py-28 py-10">



        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">

          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <FaGlobeAsia className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              International Presence
            </h3>
            <p className="mt-3 text-gray-600">
              Serving heavy vehicle markets across
              <strong> India, Sri Lanka, Nepal & Bangladesh</strong>.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <FaMapMarkerAlt className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              Branch Office
            </h3>
            <p className="mt-3 text-gray-600">
              123/136, 1st Floor Gdanian Purwa Kanpur 208012, Uttar Pradesh India
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <FaPhoneAlt className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              Call Support
            </h3>
            <p className="mt-3 text-gray-600">
              +91 XXXXX XXXXX <br /> Mon – Sat | 10 AM – 6 PM
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <FaEnvelope className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">
              Email Support
            </h3>
            <p className="mt-3 text-gray-600">
              info@balramautomotive.com <br />
              support@balramautomotive.com
            </p>
          </div>

        </div>

        {/* MAP + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-stretch">

          {/* MAP */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Kanpur Branch"
              src="https://www.google.com/maps?q=Kanpur,%20Uttar%20Pradesh&output=embed"
              className="w-full h-full min-h-[460px]"
              loading="lazy"
            ></iframe>

            <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-xl shadow-lg border-l-4 border-[#ec2324]">
              <p className="text-sm font-bold text-gray-900">
                Kanpur Branch Office
              </p>
            </div>
          </div>

          {/* STYLISH FORM (UPDATED ONLY) */}
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

            <form className="space-y-6 relative z-10">

              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30
                  outline-none transition"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30
                  outline-none transition"
                />
              </div>
              {/* Vehicle Type Select */}
              <div className="relative">
                <select
                  className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-300
      focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30
      outline-none transition text-gray-700 bg-white"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="heavy-commercial">Heavy Commercial Vehicle</option>
                  <option value="earth-moving">JCB / Earth Moving</option>
                </select>
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30
                  outline-none transition"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaPen className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  rows="4"
                  placeholder="Your Requirement"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300
                  focus:border-[#ec2324] focus:ring-2 focus:ring-[#ec2324]/30
                  outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl
                bg-gradient-to-r from-[#ec2324] to-red-600
                hover:from-black hover:to-gray-900
                text-white font-bold shadow-lg hover:shadow-2xl
                transition-all duration-300"
              >
                Submit Request <FaPaperPlane />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
