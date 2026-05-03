import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 dark:bg-[#070b16]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />

          <p className="max-w-[410px] mt-6 text-sm leading-6">
            Discover insightful blogs that inspire, empower your creativity, and
            keep you ahead in the ever-evolving world of technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-8">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 dark:text-white md:mb-5 mb-2">
                {section.title}
              </h3>

              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-primary transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Copyright 2026 BlogApp My New Project - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;