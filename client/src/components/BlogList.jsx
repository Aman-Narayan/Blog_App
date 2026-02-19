import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  const filteredBlogs = () => {
    if (input === "") return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div>
      {/* Category Menu */}
      <div
        className="flex overflow-x-auto no-scrollbar 
                      justify-start sm:justify-center 
                      gap-3 sm:gap-6 
                      px-4 sm:px-0 my-8"
      >
        {blogCategories.map((item) => (
          <div key={item} className="relative shrink-0">
            <button
              onClick={() => setMenu(item)}
              className={`relative px-4 py-1 text-sm sm:text-base
                         whitespace-nowrap rounded-full
                         transition
                         ${
                           menu === item
                             ? "text-white"
                             : "text-gray-500 hover:text-primary"
                         }`}
            >
              {item}

              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 -z-10 
                             bg-primary rounded-full"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Grid */}
      <div
        className="grid grid-cols-1 
                   sm:grid-cols-2 
                   md:grid-cols-3 
                   xl:grid-cols-4
                   gap-6 sm:gap-8
                   mb-20
                   px-4 sm:px-10 lg:px-16 xl:px-24"
      >
        {filteredBlogs()
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
