import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-20 px-4">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>

      <p className="md:text-lg text-sm text-gray-500 max-w-xl">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form className="flex flex-col md:flex-row w-full max-w-2xl gap-3 md:gap-0">
        <input
          type="email"
          placeholder="Enter your email id"
          required
          className="w-full h-12 md:h-14 px-4 border border-gray-300 
                     rounded-md md:rounded-l-md md:rounded-r-none 
                     outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="w-full md:w-auto h-12 md:h-14 px-6 md:px-10 
                     bg-primary text-white 
                     rounded-md md:rounded-r-md md:rounded-l-none
                     hover:bg-primary/90 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
