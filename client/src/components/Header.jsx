import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-8 lg:px-20">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-40 left-1/2 -translate-x-1/2 opacity-40 -z-10 pointer-events-none"
      />

      <div className="text-center pt-16 sm:pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 border border-primary/30 bg-primary/10 rounded-full text-xs sm:text-sm text-primary dark:bg-primary/20">
          <span>New: AI feature integrated</span>
          <img src={assets.star_icon} className="w-3" alt="" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
          Create, publish and grow <br />
          your <span className="text-primary">AI powered blog</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-500 dark:text-gray-300 text-sm sm:text-lg">
          Write beautiful blogs, discover fresh ideas, and manage your content
          from one clean and modern blogging platform.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#blogs"
            className="px-7 py-3 rounded-full bg-primary text-white text-sm shadow-lg shadow-primary/25 hover:scale-105 transition"
          >
            Explore Blogs
          </a>

          <a
            href="#newsletter"
            className="px-7 py-3 rounded-full border border-gray-300 dark:border-white/20 text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;