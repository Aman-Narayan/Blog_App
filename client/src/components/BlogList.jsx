import React, { useRef, useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value.trim());
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  const filteredBlogs = () => {
    let data = blogs || [];

    if (input) {
      data = data.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(input.toLowerCase()) ||
          blog.category?.toLowerCase().includes(input.toLowerCase())
      );
    }

    if (menu !== "All") {
      data = data.filter((blog) => blog.category === menu);
    }

    return data;
  };

  return (
    <section id="blogs" className="px-4 sm:px-10 lg:px-16 xl:px-24 py-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Latest Blogs
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Search and explore blogs by title or category.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="mt-7 flex w-full h-12 sm:h-14 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/10 rounded-2xl shadow-lg shadow-black/5 overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs..."
            className="flex-1 h-full px-4 text-sm sm:text-base outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="h-full px-5 sm:px-9 bg-primary text-white text-sm sm:text-base hover:bg-primary/90 transition"
          >
            Search
          </button>
        </form>

        {input && (
          <button
            onClick={onClear}
            className="mt-4 border border-gray-300 dark:border-white/20 text-xs sm:text-sm py-1.5 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Clear Search
          </button>
        )}
      </div>

      <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-3 sm:gap-4 mb-10">
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative shrink-0 px-5 py-2 text-sm rounded-full transition ${
              menu === item
                ? "text-white"
                : "text-gray-500 dark:text-gray-300 hover:text-primary"
            }`}
          >
            <span className="relative z-10">{item}</span>

            {menu === item && (
              <motion.div
                layoutId="category-pill"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute inset-0 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {filteredBlogs().length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mb-20">
          {filteredBlogs().map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          No blogs found.
        </div>
      )}
    </section>
  );
};

export default BlogList;