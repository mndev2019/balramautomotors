import React, { useEffect, useState } from "react";
import { FaUsers, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import tata from '../../assets/Image/tata.png'
import leyland from '../../assets/Image/leyland.jpg'
import jcb from '../../assets/Image/jcb.png'
import mahindra from '../../assets/Image/mahindra.png'
import UPSRTC from '../../assets/Image/UPSRTC.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Example client logos (replace with your real images)
const clientLogos = [
  tata,
  leyland,
  jcb,
  mahindra,
  UPSRTC,
];

const ClientsSection = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Animated counter effect
  useEffect(() => {
    let start = 0;
    const end = 1000; // 1000+ clients
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(end / (duration / 20));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative md:py-28 py-10 bg-gradient-to-r from-[#ec2324]/20 via-white to-[#ec2324]/20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ec2324]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16" data-aos="flip-left">
          <span className="inline-block mb-4 text-sm font-bold tracking-widest text-[#ec2324] uppercase">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            1000+ Happy Clients Across <span className="text-[#ec2324]">India</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies like TATA, Leyland, JCB, Mahindra, and UP Transport Companies.
          </p>
        </div>

        {/* Animated Counter */}
        <div className="flex justify-center items-center mb-16 gap-4">
          <FaUsers className="text-[#ec2324] text-4xl" />
          <span className="text-5xl md:text-6xl font-extrabold text-gray-900">{count}+</span>
          <span className="text-xl md:text-2xl text-gray-600">Happy Clients</span>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-28 h-16 p-4 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-105 transition duration-300"
            >
              <img src={logo} alt={`Client ${index}`} className="max-h-10 object-contain" />
            </div>
          ))}
        </div>

        {/* Featured Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition">
            <FaMapMarkerAlt className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pan India Reach</h3>
            <p className="text-gray-600 text-sm">
              Serving clients across all major states and regions with timely delivery and support.
            </p>
          </div>
          <div className="group relative bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition">
            <FaUsers className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Partners</h3>
            <p className="text-gray-600 text-sm">
              Collaborating with top brands like TATA, Leyland, JCB, and Mahindra for authentic spare parts.
            </p>
          </div>
          <div className="group relative bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition">
            <FaShieldAlt className="text-[#ec2324] text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600 text-sm">
              Ensuring 100% OEM-quality parts for all clients, backed by years of expertise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
