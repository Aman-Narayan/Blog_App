import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="relative px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="text-center pt-14 sm:pt-20 pb-10">
        {/* Search Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex w-full max-w-xl mx-auto 
                     h-11 sm:h-14
                     border border-gray-300 
                     bg-white rounded-lg 
                     shadow-sm overflow-hidden"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="flex-1 h-full px-4 
                       text-sm sm:text-base 
                       outline-none"
          />

          <button
            type="submit"
            className="h-full px-5 sm:px-8 
                       bg-primary text-white 
                       text-sm sm:text-base
                       flex items-center justify-center
                       hover:bg-primary/90 
                       transition"
          >
            Search
          </button>
        </form>

        {/* Clear Button */}
        {input && (
          <div className="mt-4">
            <button
              onClick={onClear}
              className="border border-gray-300 
                         text-xs sm:text-sm 
                         py-1.5 px-4 
                         rounded-md shadow-sm 
                         hover:bg-gray-100 
                         transition"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Badge */}
        <div
          className="inline-flex items-center justify-center gap-2 
                     px-4 sm:px-6 py-1.5 
                     mt-8 mb-5
                     border border-primary/40 
                     bg-primary/10 
                     rounded-full 
                     text-xs sm:text-sm 
                     text-primary"
        >
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-3" alt="" />
        </div>

        {/* Heading */}
        <h1
          className="text-2xl sm:text-4xl lg:text-6xl 
                     font-semibold 
                     leading-tight 
                     text-gray-700"
        >
          Your own <span className="text-primary">blogging</span> <br />
          platform.
        </h1>

        {/* Description */}
        <p
          className="mt-6 sm:mt-8 
                     max-w-2xl mx-auto 
                     text-gray-500 
                     text-sm sm:text-base 
                     px-2"
        >
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
      </div>

      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute 
                   -top-32 sm:-top-40 
                   left-1/2 -translate-x-1/2 
                   opacity-30 
                   -z-10 
                   pointer-events-none"
      />
    </div>
  );
};

export default Header;
