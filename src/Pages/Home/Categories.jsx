import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import braking from "../../assets/Image/braking.png";
import clutch from '../../assets/Image/clutchsystem.png'
import tires from "../../assets/Image/tires.png";
import tools from "../../assets/Image/tools.png";
import filter from "../../assets/Image/filter.png";
import cables from '../../assets/Image/cable.png'

const Categories = () => {
  const categories = [
    
    { title: "Braking System", image: braking },
     { title: "Clutch System", image: clutch },
    { title: "Tires & Wheels", image: tires },
    { title: "Tools & Equipment", image: tools },
    { title: "Filters", image: filter },
    { title: "Cables", image: cables },
  ];

  return (
    <section className="md:py-24 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block mb-3 px-4 py-1 text-xs font-bold tracking-widest text-[#ec2324] uppercase bg-[#ec2324]/10 rounded-full">
              Commercial & Heavy Vehicles
            </span>

            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Spare Parts for <br />
              <span className="text-[#ec2324]">Heavy & Commercial Vehicles</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl">
              We supply high-quality, reliable spare parts designed to meet the demanding
              performance needs of commercial and heavy-duty vehicles.
            </p>
          </div>

          <button className="group flex items-center gap-2 text-[#ec2324] font-semibold">
            See All
            <HiArrowNarrowRight className="text-xl group-hover:translate-x-1 transition" />
          </button>
        </div>


        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center cursor-pointer"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-36 h-36 rounded-full bg-[#ec2324]/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Circle Card */}
              <div
                className="relative w-32 h-32 rounded-full
                bg-white border border-gray-200
                flex items-center justify-center
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-all duration-500
                group-hover:-translate-y-3
                group-hover:shadow-[0_30px_70px_rgba(236,35,36,0.35)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <h3 className="mt-6 font-bold text-[17px] text-gray-900 group-hover:text-[#ec2324] transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1 tracking-wide">
                {item.count}
              </p>

              {/* Underline */}
              <span className="mt-3 w-0 h-[2px] bg-[#ec2324] group-hover:w-10 transition-all duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
