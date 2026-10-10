

import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Image/newlogo.png";
import Popup from "../Component/Popup";


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    // { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/category-detail" },
    { name: "Services", path: "/service-detail" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="bg-white border-b">
          <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-[50px]" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-10 font-semibold">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link to={item.path} className="hover:text-[#ec2324]">
                    {item.name}
                  </Link>
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#ec2324] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center gap-5">
              {/* <FaShoppingCart
                onClick={() => setOpenCart(true)}
                className="text-[#ec2324] text-xl cursor-pointer hover:scale-110 transition"
              /> */}

              <button
                onClick={() => setOpenCart(true)}
                className="hidden md:block bg-[#ec2324] px-6 py-2 rounded-md text-white font-semibold hover:scale-105 transition"
              >
                Get Parts
              </button>

              <FaBars
                onClick={() => setMobileMenu(true)}
                className="md:hidden text-2xl cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div className={`fixed inset-0 z-[999] ${mobileMenu ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/60 ${mobileMenu ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileMenu(false)}
        ></div>

        <div className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-white transition-transform duration-300 ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between p-5 border-b">
            <img src={logo} alt="logo" className="h-10" />
            <FaTimes onClick={() => setMobileMenu(false)} className="cursor-pointer" />
          </div>

          <ul className="flex flex-col gap-6 p-6 font-semibold">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={() => setMobileMenu(false)} className="text-lg hover:text-[#ec2324]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="p-6">
            <button
              onClick={() => {
                setMobileMenu(false);
                setOpenCart(true);
              }}
              className="w-full bg-[#ec2324] text-white py-3 rounded-lg font-semibold"
            >
              Get Parts
            </button>
          </div>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      <Popup open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
};

export default Navbar;

