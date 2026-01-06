// import React from "react";
// import { FaIndustry, FaTools, FaTruckMoving, FaCheckCircle } from "react-icons/fa";

// const AboutSection = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* Left Content */}
//           <div>
//             <span className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest text-[#ec2324] uppercase bg-[#ec2324]/10 rounded-full">
//               About Us
//             </span>

//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
//               Trusted Partner for <br />
//               <span className="text-[#ec2324]">
//                 Heavy & Commercial Vehicle Spare Parts
//               </span>
//             </h2>

//             <p className="mt-6 text-gray-600 leading-relaxed">
//               We specialize in supplying high-quality spare parts for heavy and
//               commercial vehicles. Our focus is on delivering genuine,
//               reliable, and performance-driven components that meet the
//               demanding needs of the automotive industry.
//             </p>

//             <p className="mt-4 text-gray-600 leading-relaxed">
//               With strong industry partnerships and authorized distributorships,
//               we ensure that every product we supply adheres to strict quality
//               standards, helping our customers maintain safety, efficiency, and
//               long-term vehicle performance.
//             </p>

//             {/* Features */}
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="flex items-start gap-3">
//                 <FaCheckCircle className="text-[#ec2324] text-lg mt-1" />
//                 <span className="text-gray-700 font-medium">
//                   Genuine & OEM-Quality Parts
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <FaCheckCircle className="text-[#ec2324] text-lg mt-1" />
//                 <span className="text-gray-700 font-medium">
//                   Specialized in Heavy Vehicles
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <FaCheckCircle className="text-[#ec2324] text-lg mt-1" />
//                 <span className="text-gray-700 font-medium">
//                   Authorized Brand Distributors
//                 </span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <FaCheckCircle className="text-[#ec2324] text-lg mt-1" />
//                 <span className="text-gray-700 font-medium">
//                   Reliable Supply & Support
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Visual / Stats */}
//           <div className="relative">
//             {/* Background Accent */}
//             <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ec2324]/10 rounded-full blur-3xl"></div>

//             <div className="bg-white rounded-2xl shadow-xl p-10 relative z-10">
//               <div className="grid grid-cols-2 gap-8 text-center">

//                 <div>
//                   <FaIndustry className="text-[#ec2324] text-3xl mx-auto mb-3" />
//                   <h3 className="text-3xl font-extrabold text-gray-900">
//                     10+
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Years of Industry Experience
//                   </p>
//                 </div>

//                 <div>
//                   <FaTruckMoving className="text-[#ec2324] text-3xl mx-auto mb-3" />
//                   <h3 className="text-3xl font-extrabold text-gray-900">
//                     1000+
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Parts Supplied
//                   </p>
//                 </div>

//                 <div>
//                   <FaTools className="text-[#ec2324] text-3xl mx-auto mb-3" />
//                   <h3 className="text-3xl font-extrabold text-gray-900">
//                     50+
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Product Categories
//                   </p>
//                 </div>

//                 <div>
//                   <FaCheckCircle className="text-[#ec2324] text-3xl mx-auto mb-3" />
//                   <h3 className="text-3xl font-extrabold text-gray-900">
//                     100%
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     Genuine Quality Assurance
//                   </p>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from "react";
import { FaTruckMoving, FaCogs, FaShieldAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="relative md:py-28 py-10 bg-white overflow-hidden">
      
      {/* Background Typography */}
      <h1 className="absolute -top-10 left-1/2 -translate-x-1/2 md:text-[120px] text-[80px] md:text-[180px] font-extrabold text-gray-100 tracking-widest select-none">
        ABOUT
      </h1>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-15 items-start">

          {/* Left Statement Block */}
          <div className="relative">
            {/* Red Rail */}
            <div className="absolute -left-6 top-0 h-full w-1 bg-[#ec2324]"></div>

            <span className="inline-block mb-5 text-sm font-bold tracking-widest text-[#ec2324] uppercase">
              Who We Are
            </span>

            <h2 className="sm:text-4xl text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Powering the <br />
              <span className="text-[#ec2324]">
                Heavy Vehicle Industry
              </span>
            </h2>

            <p className="mt-8 text-gray-600 md:text-lg text-md leading-relaxed max-w-xl">
              We are a dedicated supplier of genuine spare parts for heavy and
              commercial vehicles. Our focus is on quality, reliability, and
              long-term performance across demanding operating conditions.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-xl md:text-lg text-md">
              Through authorized distributorships and trusted partnerships,
              we deliver OEM-grade components that help fleets and transport
              businesses maintain safety, efficiency, and uptime.
            </p>
          </div>

          {/* Right Feature Stack */}
          <div className="space-y-10">

            {/* Feature */}
            <div className="group flex gap-6 items-start">
              <div className="w-14 h-14 rounded-xl md:bg-[#ec2324]/10 flex items-center justify-center group-hover:bg-[#ec2324] transition">
                <FaTruckMoving className="text-[#ec2324] text-2xl group-hover:text-white transition" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Heavy & Commercial Vehicle Focus
                </h3>
                <p className="mt-2 text-gray-600">
                  Specialized spare parts designed to handle heavy loads,
                  long routes, and tough conditions.
                </p>
              </div>
            </div>

            {/* Feature */}
            <div className="group flex gap-6 items-start">
              <div className="w-14 h-14 rounded-xl md:bg-[#ec2324]/10 flex items-center justify-center group-hover:bg-[#ec2324] transition">
                <FaCogs className="text-[#ec2324] text-2xl group-hover:text-white transition" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  OEM-Quality & Genuine Parts
                </h3>
                <p className="mt-2 text-gray-600">
                  Every component meets strict quality standards and
                  manufacturer specifications.
                </p>
              </div>
            </div>

            {/* Feature */}
            <div className="group flex gap-6 items-start">
              <div className="w-14 h-14 rounded-xl md:bg-[#ec2324]/10 flex items-center justify-center group-hover:bg-[#ec2324] transition">
                <FaShieldAlt className="text-[#ec2324] text-2xl group-hover:text-white transition" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Trusted & Authorized Distribution
                </h3>
                <p className="mt-2 text-gray-600">
                  Backed by authorized partnerships with leading automotive
                  and engineering brands.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

