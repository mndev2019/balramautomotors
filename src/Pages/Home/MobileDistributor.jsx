
// import React from "react";

// const distributors = [
//   {
//     name: "Mahindra Genuine Spare Parts",
//     desc: "We are an authorized distributor of Mahindra genuine OEM spare parts, ensuring reliability and long-lasting performance.",
//   },
//   {
//     name: "MSL Driveline System India Limited",
//     desc: "Authorized distributors of high-quality driveline systems engineered for strength, durability, and performance.",
//   },
//   {
//     name: "Menon Breaks",
//     desc: "Official distributors of precision-engineered bearings trusted for smooth and efficient operations.",
//   },
//   {
//     name: "ACEY Engineering Components",
//     desc: "Authorized distribution partner delivering dependable engineering components with assured quality.",
//   },
// ];

// const DistributorSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-black">
//             Authorized Brands We Distribute
//           </h2>

//           <div className="mt-3 flex justify-center items-center gap-2">
//             <span className="w-10 h-[2px] bg-red-600"></span>
//             <span className="text-sm uppercase tracking-widest text-red-600 font-semibold">
//               Authorized OEM Brands
//             </span>
//             <span className="w-10 h-[2px] bg-red-600"></span>
//           </div>

//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             We are authorized distributors for leading OEM brands, supplying
//             genuine, reliable, and high-performance automotive components.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {distributors.map((item, index) => (
//             <div
//               key={index}
//               className="group bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//             >
//               {/* Top Accent */}
//               <div className="w-full h-1 bg-red-600 rounded-full mb-6 transition-all duration-300 group-hover:h-2"></div>

//               {/* Number */}
//               <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600 font-bold text-lg mb-4">
//                 {index + 1}
//               </span>

//               <h3 className="text-lg font-semibold text-black">
//                 {item.name}
//               </h3>

//               <p className="mt-3 text-sm text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>

//               {/* Bottom Hover Line */}
//               <span className="block mt-6 h-[2px] w-0 bg-black mx-auto transition-all duration-300 group-hover:w-16"></span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DistributorSection;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mahendra from '../../assets/Image/mahendragenuine.png'
import msl from '../../assets/Image/msl.png'
import menon from '../../assets/Image/mb.png'
import acey from '../../assets/Image/acey.jpeg'
import bg from '../../assets/Image/truck.jpg'

const MobileDistributor = () => {
  const distributors = [
    {
      name: "Mahindra Genuine Spare Parts",
      desc: "We are an authorized distributor of Mahindra genuine OEM spare parts, ensuring reliability and long-lasting performance.",
      logo: mahendra,
    },
    {
      name: "MSL Driveline System India Limited",
      desc: "Authorized distributors of high-quality driveline systems engineered for strength, durability, and performance.",
      logo: msl,
    },
    {
      name: "Menon Breaks",
      desc: "Official distributors of precision-engineered bearings trusted for smooth and efficient operations.",
      logo: menon,
    },
    {
      name: "ACEY Engineering Components",
      desc: "Authorized distribution partner delivering dependable engineering components with assured quality.",
      logo: acey,
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <section
      className="relative w-full lg:px-20 px-5 py-16 bg-center bg-no-repeat bg-cover md:hidden block"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#0e1f17]/80"></div>
      <div className="relative  grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* Left Side */}
        <div className="md:col-span-4 text-white" data-aos="fade-right">

          {/* Heading */}
          <h2 className="md:text-3xl text-2xl font-bold">
            Authorized Brands We Distribute
          </h2>

          {/* Divider */}
          <div className="mt-3 flex items-center gap-2">
            <span className="w-10 h-[2px] bg-red-600"></span>
            <span className="text-sm uppercase tracking-widest text-red-500 font-semibold">
              Authorized OEM Brands
            </span>
            <span className="w-10 h-[2px] bg-red-600"></span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-300 leading-relaxed">
            We are authorized distributors for leading OEM brands, supplying genuine,
            reliable, and high-performance automotive components trusted across
            industries.
          </p>

        </div>


        {/* Right Side - Slider */}
        <div className="md:col-span-8">
          <Slider {...settings}>
            {distributors.map((item, index) => (
              <div key={index} className="px-3 h-full">
                <div
                  className="group bg-white border border-gray-200 rounded-xl p-6 text-center 
                             transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                             h-full flex flex-col min-h-[380px]"
                >

                  {/* Top Accent */}
                  <div className="w-full h-1 bg-red-600 rounded-full mb-4 transition-all duration-300 group-hover:h-2"></div>

                  {/* Logo */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-14 object-contain"
                    />
                  </div>

                  {/* Number */}
                  {/* <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600 font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </span> */}

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-black">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* Bottom Hover Line */}
                  <span className="block mt-6 h-[2px] w-0 bg-black mx-auto transition-all duration-300 group-hover:w-16"></span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default MobileDistributor;
