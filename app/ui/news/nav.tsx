"use client";
import React from "react";
import Link from "next/link";
import { notoSansSC } from "@/app/ui/fonts";

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <nav className={`bg-white fixed top-0 left-0 w-full z-50 shadow-md ${notoSansSC.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/news" className="text-black font-bold text-lg">
            <p className="text-2xl">新闻简报</p>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/news" className="text-black hover:underline">
            <p className="text-xl">头版</p>
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/tech" className="text-black hover:underline">
            <p className="text-xl">科技</p>
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/peach-blossom" className="text-black hover:underline">
            <p className="text-xl">桃花源</p>
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/philosophy" className="text-black hover:underline">
            <p className="text-xl">柏拉图</p>
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/philosophy" className="text-black hover:underline">
            <p className="text-xl">齐物论</p>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white shadow-lg text-black"
      >
        <Link href="/" className="block px-6 py-2 hover:bg-gray-100">
          <p className="text-lg">头版</p>
        </Link>
        <Link href="/tech" className="block px-6 py-2 hover:bg-gray-100">
          <p className="text-lg">科技</p>
        </Link>
        <Link href="/peach-blossom" className="block px-6 py-2 hover:bg-gray-100">
          <p className="text-lg">桃花源</p>
        </Link>
        <Link href="/philosophy" className="block px-6 py-2 hover:bg-gray-100">
          <p className="text-lg">齐物论</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;