import React from "react";
import { FaShippingFast, FaTools, FaShieldAlt, FaHeadset } from "react-icons/fa";

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

const Service = () => {
  return (
    <section className="md:py-28 py-10 bg-white relative overflow-hidden">
      
      {/* Decorative Shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ec2324]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Powering Your Drive with
              <span className="block text-[#ec2324]">
                Trusted Auto Services
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Built for performance-driven drivers who demand reliability,
              quality, and speed.
            </p>
          </div>

          {/* Accent Card */}
          <div className="relative bg-black text-white rounded-3xl p-8 w-full lg:w-[380px] shadow-2xl">
            <span className="absolute -top-6 left-6 text-sm uppercase tracking-widest text-[#ec2324] font-bold">
              Since 2018
            </span>
             <h3 className="text-3xl font-extrabold">
                   10 Lakh+
                    <span className="block text-base font-medium text-gray-400 mt-1">
                                    Parts Delivered
                      </span>
                   </h3>

            <div className="mt-6 h-[2px] w-20 bg-[#ec2324]"></div>

            <p className="mt-6 text-gray-300">
              Trusted by mechanics, workshops, and truck enthusiasts nationwide.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative flex gap-6 md:p-8 p-5 rounded-3xl border border-gray-200
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
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
