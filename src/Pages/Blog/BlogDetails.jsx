
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiHome,
  FiPhoneCall,
} from "react-icons/fi";
import { BaseUrl } from "../../API/BaseUrl";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        setLoading(true);
        setBlog(null);

        const resp = await axios.get(`${BaseUrl}/blog/${slug}`);

        if (resp.data.success) {
          setBlog(resp.data.data);
        } else {
          toast.error(resp.data.message || "Blog not found");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#ec2324] rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-500 font-medium">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">
            Blog Not Found
          </h1>
          <p className="text-gray-500 mt-3">
            The article you are looking for may have been removed or is
            unavailable.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 mt-6 bg-[#ec2324] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            <FiArrowLeft /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#230809] via-[#7f171b] to-[#ec2324] text-white">
        <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full bg-black/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/75 mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 hover:text-white transition"
            >
              <FiHome />
              Home
            </Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-white transition">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-white font-medium line-clamp-1">
              {blog.title}
            </span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 rounded-full px-4 py-2 text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-white" />
              BLRAM AUTOMOTIVE
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {blog.title}
            </h1>

            {blog.short_description && (
              <p className="mt-6 text-base md:text-xl leading-8 text-white/85 max-w-3xl">
                {blog.short_description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/80">
              {formattedDate && (
                <span className="flex items-center gap-2">
                  <FiCalendar className="text-lg" />
                  {formattedDate}
                </span>
              )}
              <span className="flex items-center gap-2">
                <FiClock className="text-lg" />
                Automotive Insights
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Article */}
          <article className="lg:col-span-8 min-w-0">
            {blog.image && (
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full max-h-[520px] min-h-[240px] object-cover"
                />
              </div>
            )}

            <div className="mt-9">
              <div className="w-16 h-1.5 bg-[#ec2324] rounded-full mb-6" />

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                {blog.title}
              </h2>

              {blog.short_description && (
                <p className="mt-5 text-lg text-gray-600 leading-8 font-medium">
                  {blog.short_description}
                </p>
              )}

              <div className="mt-7 text-gray-700 text-base md:text-lg leading-8 whitespace-pre-line break-words">
                {blog.description}
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/all-blog"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-[#ec2324] font-semibold transition"
              >
                <FiArrowLeft />
                All Blogs
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#ec2324] font-semibold hover:gap-3 transition-all"
              >
                Enquire Now <FiArrowRight />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Contact Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#230809] to-[#ec2324] text-white p-7 md:p-8">
                <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full" />

                <div className="relative">
                  <span className="text-sm font-semibold text-white/75 uppercase tracking-widest">
                    Need Assistance?
                  </span>

                  <h3 className="text-2xl font-bold mt-3 leading-snug">
                    Looking for Reliable Automotive Parts?
                  </h3>

                  <p className="mt-4 text-white/80 leading-7">
                    Get in touch with our team for your automotive spare
                    parts requirements and enquiries.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-7 flex items-center justify-center gap-2 w-full bg-white text-[#ec2324] font-bold px-5 py-3.5 rounded-xl hover:bg-gray-100 transition"
                  >
                    Contact Us <FiArrowRight />
                  </Link>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl border border-gray-200 p-6 md:p-7 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900">
                  Explore Blram Automotive
                </h3>

                <div className="w-12 h-1 bg-[#ec2324] rounded-full mt-3 mb-5" />

                <p className="text-gray-600 leading-7">
                  Explore automotive information, industry insights and
                  updates from Blram Automotive.
                </p>

                <Link
                  to="/all-blog"
                  className="mt-5 inline-flex items-center gap-2 text-[#ec2324] font-bold hover:gap-3 transition-all"
                >
                  Explore All Blogs <FiArrowRight />
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#ec2324]">
                  <FiPhoneCall className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Have a Question?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 leading-6">
                    Our team is ready to help with your enquiry.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block mt-2 text-sm font-bold text-[#ec2324] hover:underline"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 py-14 md:py-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#ec2324]">
            Blram Automotive
          </span>

          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900">
            Have an Automotive Parts Requirement?
          </h2>

          <p className="mt-4 text-gray-600 leading-7 max-w-2xl mx-auto">
            Contact our team to discuss your requirements and get the
            assistance you need.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-7 bg-[#ec2324] text-white px-7 py-3.5 rounded-xl font-bold shadow-md hover:bg-red-700 hover:shadow-lg transition"
          >
            Contact Our Team <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
