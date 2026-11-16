import axios from 'axios';
import React, { useState } from 'react'


import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BaseUrl } from '../../API/BaseUrl';



const Blog = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const getBlogs = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/blog`)
            const latestThree = res.data.data.slice(0, 3); // ✅ first 3
            setData(latestThree)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getBlogs()
    }, [])

   
    return (
        <section className='relative md:py-28 py-10 bg-gradient-to-r from-[#ec2324]/20 via-white to-[#ec2324]/20 overflow-hidden md:px-20 px-10'>
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ec2324]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#ec2324] leading-tight">
                        Read our latest blog

                    </h2>
                </div>

                <button
                    onClick={() => navigate('/all-blog')}
                    className="inline-block px-8 py-3 bg-[#ec2324] text-white font-medium text-lg rounded-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition duration-300 whitespace-nowrap"
                >
                    View all Post
                </button>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
                {/* Blog Card */}
                {data.map((itm) => (
                    <>
                        <div className="border border-gray-300 rounded-lg overflow-hidden group">
                            <div className="relative">
                                {/* <img
                                    src={`${Base_Url}/${itm.image}`}
                                    alt="Blog"
                                    className="w-full h-[250px] object-cover rounded-tl-lg rounded-tr-lg transform transition-transform duration-500 group-hover:scale-110"
                                /> */}
                                <img
                                    src={itm.image}
                                    alt="Blog"
                                    className="w-full h-[250px] object-cover rounded-tl-lg rounded-tr-lg transform transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Date Box — overlaps bottom of image */}
                                <div className="absolute -bottom-6 left-6 w-[50px] h-[56px] bg-[#ec2324] rounded-[4px] flex flex-col items-center justify-center leading-tight shadow-md">
                                    <h4 className="text-white font-semibold text-[20px]">{new Date(itm.createdAt).getDate()}</h4>
                                    <p className="text-white text-[12px] font-normal"> {new Date(itm.createdAt).toLocaleString("en-US", { month: "short" })}</p>
                                </div>
                            </div>

                            <div className="px-6 pt-10 pb-4">
                                <h4 className="text-black text-[20px] font-semibold leading-snug hover:text-[var(--primary)]">
                                    {itm.title}
                                </h4>
                                <p onClick={() =>
                                    navigate(`/blog-detail/${itm.slug}`)
                                } className="flex items-center gap-2 text-[#ec2324] font-medium text-sm cursor-pointer hover:gap-3 transition-all">
                                    Read More
                                    <FaArrowRight className="text-[14px]" />
                                </p>

                            </div>



                        </div>
                    </>
                ))}

            </div>
        </section>
    )
}

export default Blog
