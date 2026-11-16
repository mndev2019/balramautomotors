import React, { useState } from 'react'

import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { BaseUrl } from '../../API/BaseUrl'



const AllBlog = () => {
    const navigate = useNavigate("");
    const [data, setData] = useState([]);

    const getBlogs = async () => {
        try {
            const res = await axios.get(`${BaseUrl}/blog`)

            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getBlogs()
    }, [])

  
    return (
        <>

            <section className='relative px-6 md:px-20 lg:py-20 py-10 overflow-hidden bg-gradient-to-r from-white via-[var(--primary)]/5 to-white'>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                    <div className='pt-10'>
                        <p className=' text-[20px] font-[700] leading-[28px] text-[#ec2324]'>
                            OUR NEWS AND BLOG


                        </p>
                        <h2 className='text-[#001D08] lg:text-[35px] text-[25px] font-[700]'>
                            Read our latest blog
                        </h2>
                    </div>
                </div>





                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
                    {/* Blog Card */}
                    {data.map((itm) => (
                        <>
                            <div className="border border-gray-300 rounded-lg overflow-hidden group">
                                <div className="relative">
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
                                    <h4 className="text-black text-[20px] font-semibold leading-snug hover:text-[#ec2324]">
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
        </>

    )
}

export default AllBlog
