'use client'

import Img from "next/image";
import Icon from "./icon.png";
import React from "react";
import Link from "next/link";
import Quiz from "./quiz/quiz";

function page() {
 
// console.log(props);
  return (
    <div>
		
      <nav className=" shadow-lg sticky top-0 backdrop-blur-sm bg-white/30 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* <!-- Website Logo --> */}
                <Link href="#" className="flex items-center py-4 px-2">
                  <Img src={Icon} alt="Logo" className="h-8 w-8 " />
                  <span className="font-semibold text-gray-500 text-lg">
                    Quiz app
                  </span>
                </Link>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href=""
                  className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                >
                  Home
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Services
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  About
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ">
              <Link
                href="/login"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Log In
              </Link>
              <Link
                href=""
                className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        {/*  here the hidden the menue value */}
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <Link
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* <script>
			
				});
			</script> */}
      </nav>
      <br />
      {/* <h1 className="text-black-500 text-2xl md:text-3xl lg:text-4xl font-bold p-4">Tailwind Navigation Toolbar</h1> */}
      <Quiz />
    </div>
  );
}

export default page;
