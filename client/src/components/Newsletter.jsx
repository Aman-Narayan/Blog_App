import React from "react";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="mx-4 sm:mx-10 lg:mx-24 my-20 rounded-3xl bg-primary/10 dark:bg-white/10 px-5 py-14 text-center"
    >
      <h1 className="md:text-4xl text-2xl font-bold text-gray-900 dark:text-white">
        Never Miss a Blog!
      </h1>

      <p className="mt-3 md:text-lg text-sm text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
        Subscribe to get the latest blogs, tech updates, and exclusive news.
      </p>

      <form className="mt-8 flex flex-col md:flex-row w-full max-w-2xl mx-auto gap-3">
        <input
          type="email"
          placeholder="Enter your email id"
          required
          className="w-full h-13 md:h-14 px-4 border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1020] text-gray-900 dark:text-white rounded-xl outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="h-13 md:h-14 px-8 bg-primary text-white rounded-xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;