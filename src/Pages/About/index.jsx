import React from "react";
import { FaTruck, FaCogs, FaGlobe, FaAward } from "react-icons/fa";
import about from '../../assets/Image/about.jpg'

const AboutUs = () => {
  return (
    <>

      {/* ===== Banner (Previous Style) ===== */}
      <section className="relative h-[420px] flex items-center justify-center bg-black">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative text-center px-6">
          <h1 className="text-4xl  md:text-5xl font-extrabold text-white">
            About <span className="text-[#ec2324]">Us</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Trusted partner for heavy & commercial vehicle spare parts
          </p>

          {/* Red Divider */}
          <div className="mt-6 flex justify-center">
            <span className="w-20 h-[3px] bg-[#ec2324]"></span>
          </div>
        </div>
      </section>

      {/* ===== About Intro ===== */}
      <section className="md:py-24 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10 items-center">

          <div>
            <span className="text-sm font-bold tracking-widest text-[#ec2324] uppercase">
              Who We Are
            </span>

            <h2 className="mt-4 sm:text-4xl md:text-5xl text-2xl font-extrabold text-gray-900">
              Powering Heavy Vehicles <br />
              <span className="text-[#ec2324]">With Genuine Parts</span>
            </h2>

            <p className="md:mt-8 mt-4 text-black leading-relaxed">
              We specialize in supplying genuine and OEM-quality spare parts
              designed for heavy and commercial vehicles operating under extreme
              conditions.
            </p>

            <p className="mt-4 text-black leading-relaxed">
              As authorized distributors, we ensure quality, reliability, and
              long-term performance for every component we deliver.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-8">
            <StatCard icon={<FaTruck />} title="Heavy Vehicles" />
            <StatCard icon={<FaGlobe />} title="4+ Countries" />
            <StatCard icon={<FaCogs />} title="OEM Parts" />
            <StatCard icon={<FaAward />} title="Trusted Brand" />
          </div>

        </div>
      </section>

      {/* ===== Story Section ===== */}
      <section className="md:py-28 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 md:gap-16 gap-10">
          <img src={about} className="rounded-sm shadow-sm"/>

          {/* <h2 className="text-6xl font-extrabold text-gray-200 leading-none">
            OUR <br /> STORY
          </h2> */}

          <div className="lg:col-span-2 space-y-6">
            <p className="text-black leading-relaxed">
              Our journey is built on trust, industry knowledge, and a commitment
              to deliver genuine spare parts for heavy-duty vehicles.
            </p>

            <p className="text-black leading-relaxed">
              With operations across India, Sri Lanka, Nepal, and Bangladesh, we
              support fleets and businesses with reliable supply and strong
              after-sales support.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <span className="w-12 h-[3px] bg-[#ec2324]"></span>
              <span className="font-bold text-[#ec2324] tracking-widest text-sm uppercase">
                Reliability • Strength • Performance
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="md:py-28 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose Us
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-10">

            <Feature title="Industry Expertise" text="Deep understanding of heavy and commercial vehicle systems." />
            <Feature title="Authorized Distribution" text="Supplying only genuine and certified spare parts." />
            <Feature title="Wide Reach" text="Serving customers across multiple countries with efficiency." />

          </div>
        </div>
      </section>

    </>
  );
};

const StatCard = ({ icon, title }) => (
  <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow hover:-translate-y-2 transition">
    <div className="text-[#ec2324] text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
  </div>
);

const Feature = ({ title, text }) => (
  <div className="relative p-10 border border-gray-200 rounded-3xl hover:shadow-2xl transition">
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#ec2324] rounded-full"></div>
    <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
    <p className="mt-4 text-black">{text}</p>
  </div>
);

export default AboutUs;
