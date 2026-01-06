import React from "react";
import { FaUserTie, FaAward, FaClock } from "react-icons/fa";

const stats = [
    {
        title: "Experts On Board",
        value: "50+",
        icon: <FaUserTie />,
        desc: "A dedicated team of skilled professionals ensuring quality and reliability.",
        color: "from-[#ec2324] to-red-600",
    },
    {
        title: "Years of Legacy",
        value: "25+",
        icon: <FaClock />,
        desc: "Over two decades of experience in supplying heavy & commercial vehicle spare parts.",
        color: "from-yellow-500 to-yellow-700",
    },
    {
        title: "Trusted by Clients",
        value: "1000+",
        icon: <FaAward />,
        desc: "Recognized for delivering genuine, OEM-quality parts nationwide.",
        color: "from-blue-500 to-blue-700",
    },
];

const TeamSection = () => {
    return (
        <section className="relative md:py-28 py-10 bg-gray-50 overflow-hidden">
            {/* Background Blur Shapes */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#ec2324]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 text-sm font-bold tracking-widest text-[#ec2324] uppercase">
                        Team & Legacy
                    </span>
                    <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Powering the Industry with <span className="text-[#ec2324]">Experience & Expertise</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our team of experts and our decades-long legacy ensure the highest quality in heavy & commercial vehicle spare parts supply.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-10 rounded-3xl shadow-2xl overflow-hidden transition hover:shadow-3xl cursor-pointer"
                        >
                            {/* Decorative Gradient Circle */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-30 transform rotate-12 group-hover:scale-110 transition-transform duration-500`}></div>

                            {/* Icon */}
                            <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white text-2xl shadow-lg mb-6`}>
                                {item.icon}
                            </div>

                            {/* Stats Content */}
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{item.value}</h3>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamSection;
