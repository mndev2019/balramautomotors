import React from "react";

// Import realistic images
import commercialImg from "../../assets/Image/commercial.png";
import passengerImg from "../../assets/Image/passenger.png";
import heavyImg from "../../assets/Image/heavy.png";
import earthImg from "../../assets/Image/earthmoving.png";

const categories = [
  {
    name: "Commercial Vehicle",
    desc: "High-quality spare parts for trucks and commercial fleets, ensuring durability and performance.",
    image: commercialImg,
    color: "from-[#ec2324] to-red-600",
  },
  {
    name: "Passenger Vehicle",
    desc: "Genuine parts for cars, SUVs, and vans to keep your vehicles safe and reliable.",
    image: passengerImg,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Heavy Commercial Vehicle",
    desc: "Engineered components for heavy trucks, buses, and industrial transport vehicles.",
    image: heavyImg,
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Earth Moving",
    desc: "Durable parts for JCBs, excavators, and other earth-moving machinery.",
    image: earthImg,
    color: "from-green-500 to-green-700",
  },
];

const CategoryDetail = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[420px] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Our <span className="text-[#ec2324]">Categories</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore our range of spare parts for Commercial, Passenger,
            Heavy Commercial, and Earth Moving Vehicles
          </p>

          <div className="mt-6 flex justify-center">
            <span className="w-20 h-[3px] bg-[#ec2324]"></span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 cursor-pointer"
              >
                {/* Gradient Circle Background */}
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${cat.color} opacity-70 transform rotate-12 group-hover:scale-110 transition-transform duration-500`}
                ></div>

                <div className="relative p-8 flex flex-col items-start">
                  {/* Image (Icon Replacement) */}
                  <div className={` `}>
                    <div className="h-full w-full rounded-sm overflow-hidden bg-white">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>


                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 my-3 group-hover:text-[#ec2324] transition-colors duration-300">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* Button */}
                  <button className="mt-6 px-5 py-2 bg-[#ec2324] text-white rounded-full text-sm font-semibold shadow-lg hover:bg-black transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryDetail;
