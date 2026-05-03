import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-[#070b16] dark:text-white transition">

  {/* Background */}
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float-glow" />
    <div className="absolute top-52 right-0 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl animate-float-glow" />
    <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl animate-float-glow" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[length:28px_28px]" />
  </div>

  {/* Content */}
  <div className="relative z-10">
    <Navbar />
    <Header />
    <BlogList />
    <Newsletter />
    <Footer />
  </div>
</main>
  );
};

export default Home;