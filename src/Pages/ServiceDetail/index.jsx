import React from "react";
import { FaShippingFast, FaTools, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Fast Nationwide Delivery",
    desc: "Quick and reliable shipping across the country with real-time tracking.",
    icon: <FaShippingFast />,
    number: "01",
  },
  {
    title: "Genuine Spare Parts",
    desc: "100% authentic parts sourced directly from trusted manufacturers.",
    icon: <FaTools />,
    number: "02",
  },
  {
    title: "Warranty Protected",
    desc: "All spare parts are covered with official manufacturer warranty.",
    icon: <FaShieldAlt />,
    number: "03",
  },
  {
    title: "Expert Support",
    desc: "Our specialists help you choose the right part for your vehicle.",
    icon: <FaHeadset />,
    number: "04",
  },
];

const ServiceDetail = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      
      {/* Hero Banner */}
      <div className="relative bg-black h-[400px] flex items-center justify-center rounded-3xl mx-6 md:mx-12 md:mb-20 mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative text-center text-4xl md:text-6xl font-extrabold text-white z-10">
          Our <span className="text-[#ec2324]">Services</span>
        </h1>
        <p className="absolute bottom-8 text-gray-300 z-10 text-center max-w-2xl">
          Explore our premium services designed to support heavy & commercial vehicle operations.
        </p>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#ec2324]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Stats & Intro */}
        <div className="grid lg:grid-cols-3 gap-12 md:mb-20 mb-10 items-start">
          {/* Stats Card */}
          <div className="lg:col-span-1 bg-black text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <span className="absolute -top-6 left-6 text-sm uppercase tracking-widest text-[#ec2324] font-bold">
              Since 2018
            </span>
            <h3 className="text-4xl font-extrabold mt-6">
              10 Lakh+{" "}
              <span className="block text-base font-medium text-gray-400 mt-1">
                Parts Delivered
              </span>
            </h3>
            <div className="mt-6 h-[2px] w-20 bg-[#ec2324]"></div>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Trusted by mechanics, workshops, and truck enthusiasts nationwide.
            </p>
          </div>

          {/* Intro Text */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="sm:text-4xl text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Powering Your Drive with <span className="text-[#ec2324]">Trusted Auto Services</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Built for performance-driven drivers who demand reliability, quality, and speed. Our services are tailored to meet the unique requirements of heavy, commercial, and passenger vehicle owners.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-gray-200
              bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              hover:shadow-[0_30px_80px_rgba(236,35,36,0.25)]
              transition-all duration-500 hover:-translate-y-2"
            >
              {/* Number */}
              <span className="absolute -top-6 -right-6 text-7xl font-extrabold text-gray-100 group-hover:text-[#ec2324]/10 transition">
                {item.number}
              </span>

              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-2xl
                bg-gradient-to-br from-[#ec2324] to-red-400 text-white text-2xl
                shadow-lg"
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <button
                  onClick={handleContact}
                  className="inline-block mt-2 px-5 py-2 bg-[#ec2324] text-white rounded-full font-semibold shadow-lg hover:bg-black transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceDetail;
