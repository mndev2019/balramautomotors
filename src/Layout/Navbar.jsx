

// import React, { useState } from "react";
// import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../assets/Image/newlogo.png";

// const Navbar = () => {
//   const [openCart, setOpenCart] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/" },
//     { name: "Categories", path: "/category-detail" },
//     { name: "Services", path: "/service-detail" },
//     { name: "About", path: "/about-us" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header className="fixed top-0 left-0 w-full z-50">
//         <nav className="bg-white border-b">
//           <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">

//             {/* Logo */}
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-[50px] w-auto object-contain"
//             />

//             {/* Desktop Menu */}
//             <ul className="hidden md:flex items-center gap-10 font-semibold">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="relative group">
//                   <Link to={item.path} className="hover:text-[#ec2324] transition">
//                     {item.name}
//                   </Link>
//                   <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#ec2324]
//                     transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//               ))}
//             </ul>

//             {/* Right Actions */}
//             <div className="flex items-center gap-5">
//               <FaShoppingCart
//                 onClick={() => setOpenCart(true)}
//                 className="text-[#ec2324] text-xl cursor-pointer hover:scale-110 transition"
//               />

//               <button
//                 onClick={() => setOpenCart(true)}
//                 className="hidden md:block bg-[#ec2324] px-6 py-2 rounded-md
//                 text-white font-semibold hover:scale-105 transition"
//               >
//                 Get Parts
//               </button>

//               {/* Mobile Menu Icon */}
//               <FaBars
//                 onClick={() => setMobileMenu(true)}
//                 className="md:hidden text-2xl cursor-pointer"
//               />
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`fixed inset-0 z-[999] transition-all
//         ${mobileMenu ? "visible" : "invisible"}`}
//       >
//         {/* Overlay */}
//         <div
//           onClick={() => setMobileMenu(false)}
//           className={`absolute inset-0 bg-black/60 transition-opacity
//           ${mobileMenu ? "opacity-100" : "opacity-0"}`}
//         ></div>

//         {/* Drawer */}
//         <div
//           className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-white
//           transform transition-transform duration-300
//           ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
//         >
//           {/* Header */}
//           <div className="flex items-center justify-between p-5 border-b">
//             <img src={logo} alt="logo" className="h-10" />
//             <FaTimes
//               onClick={() => setMobileMenu(false)}
//               className="text-xl cursor-pointer"
//             />
//           </div>

//           {/* Menu Items */}
//           <ul className="flex flex-col gap-6 p-6 font-semibold">
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item.path}
//                   onClick={() => setMobileMenu(false)}
//                   className="text-lg hover:text-[#ec2324]"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile CTA */}
//           <div className="p-6">
//             <button
//               onClick={() => {
//                 setMobileMenu(false);
//                 setOpenCart(true);
//               }}
//               className="w-full bg-[#ec2324] text-white py-3 rounded-lg font-semibold"
//             >
//               Get Parts
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= CART MODAL ================= */}
//       {openCart && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center">

//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black/70"
//             onClick={() => setOpenCart(false)}
//           ></div>

//           {/* Modal */}
//           <div className="relative bg-white rounded-2xl p-8 w-[90%] max-w-md
//             animate-scaleUp shadow-2xl">

//             <button
//               onClick={() => setOpenCart(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//             >
//               <FaTimes />
//             </button>
//             <img src={logo} className="h-[50px] mx-auto"/>
//             <h3 className="text-2xl font-bold text-center mb-6">
//               Enquiry for Parts
//             </h3>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#ec2324] outline-none"
//               />

//               <input
//                 type="tel"
//                 placeholder="Mobile Number"
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#ec2324] outline-none"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#ec2324] outline-none"
//               />

//               <select
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#ec2324] outline-none"
//               >
//                 <option value="">Select Vehicle Type</option>
//                 <option>Car</option>
//                 <option>Heavy Commercial Vehicle</option>
//                 <option>JCB / Earth Moving</option>
             
//               </select>

//               <textarea
//                 rows="3"
//                 placeholder="Requirement"
//                 className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#ec2324] outline-none resize-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-[#ec2324] text-white py-3 rounded-lg
//                 font-semibold hover:scale-[1.02] transition"
//               >
//                 Submit Enquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ================= ANIMATION ================= */}
//       <style>
//         {`
//           @keyframes scaleUp {
//             0% { transform: scale(0.8); opacity: 0 }
//             100% { transform: scale(1); opacity: 1 }
//           }
//           .animate-scaleUp {
//             animation: scaleUp 0.3s ease-out;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Navbar;

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
    { name: "Shop", path: "/shop" },
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
              <FaShoppingCart
                onClick={() => setOpenCart(true)}
                className="text-[#ec2324] text-xl cursor-pointer hover:scale-110 transition"
              />

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

