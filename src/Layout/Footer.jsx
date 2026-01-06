import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/Image/newlogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 relative">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

     {/* Brand Info */}
<div>
  {/* Logo + Name */}
  <div className="bg-white p-2 rounded-sm">
    <img
      src={logo}   // change path if needed
      alt="Balram Automotive Logo"
      className="h-12 w-auto"
    />
   
  </div>

  {/* Description */}
  <p className="text-gray-300 leading-relaxed mt-2">
    Authorized distributor of genuine spare parts for heavy & commercial vehicles.
    Serving India, Sri Lanka, Nepal & Bangladesh.
  </p>
</div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ec2324]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#ec2324] transition">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#ec2324] transition">Shop</Link>
            </li>
            <li>
              <Link to="/category-detail" className="hover:text-[#ec2324] transition">Categories</Link>
            </li>
            <li>
              <Link to="/service-detail" className="hover:text-[#ec2324] transition">Services</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-[#ec2324] transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#ec2324] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ec2324]">Contact Us</h3>
          <p className="text-gray-300">Kanpur, Uttar Pradesh, India</p>
          <p className="text-gray-300 mt-1">+91 XXXXX XXXXX</p>
          <p className="text-gray-300 mt-1">info@balramautomotive.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ec2324]">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#ec2324] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#ec2324] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#ec2324] transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-[#ec2324] transition"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-6 text-sm">
        © 2026 BALRAM Automotive. All rights reserved. <br />
        Developed by{" "}
        <a
          href="https://ramot.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ec2324] hover:text-white transition font-medium"
        >
          Ramot.cloud
        </a>
      </p>


    </footer>
  );
};

export default Footer;
