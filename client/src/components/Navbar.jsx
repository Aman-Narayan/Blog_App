import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import ThemeToggle from "./ThemeToggle ";


const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#0b1020]/80 border-b border-gray-200/70 dark:border-white/10">
      <div className="flex justify-between items-center py-4 mx-5 sm:mx-12 xl:mx-32">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer bg-white rounded-xl"
        />

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-5 sm:px-8 py-2.5 shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition"
          >
            {token ? "Dashboard" : "Login"}
            <img src={assets.arrow} className="w-3" alt="arrow" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;