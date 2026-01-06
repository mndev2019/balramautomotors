import React, { useEffect } from "react";
import bg from "../../assets/Image/truck.jpg";
import { FaCar, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative h-[95vh] flex items-center bg-cover bg-center overflow-hidden lg:pt-[100px] my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40"></div>

      {/* Floating Red Glow */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#ec2324]/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#ec2324]/20 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 w-full banner" data-aos="fade-left">
        <div className="max-w-2xl text-white backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 
          bg-yellow-100 
          border border-yellow-300
        text-yellow-700 
          px-4 py-1 rounded-full text-sm font-semibold mb-6">
            <FaCar className="text-base" />
            Trusted Auto Parts Store
          </div>


          {/* Heading */}
          <h1 className="sm:text-4xl text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
            Drive with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ec2324] to-red-400">
              Premium Spare Parts
            </span>
          </h1>

          {/* Divider */}
          <div className="mt-4 w-24 h-[3px] bg-[#ec2324] rounded-full"></div>

          {/* Description */}
          <p className="mt-6 sm:text-lg text-md text-gray-200 leading-relaxed">
            Genuine, high-performance spare parts crafted for safety,
            durability, and superior driving experience across all major brands.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => navigate('/contact')} className="group flex items-center gap-2 bg-[#ec2324] px-8 py-3 rounded-md font-semibold shadow-lg
              hover:shadow-red-500/40 transition-all duration-300 hover:scale-105">
              Shop Now
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <button onClick={() => navigate('/category-detail')} className="border border-white/70 px-8 py-3 rounded-md font-semibold
              hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              Explore Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;