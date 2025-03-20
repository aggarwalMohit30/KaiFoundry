"use client";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Button from "./UI/Button";
=======
import React, { useState } from "react";
import CareersSection from "./CareersScreen/CareersSection";
>>>>>>> 2a87e1d (added carreres)

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const pathname = usePathname();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(window.scrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  const closeDropdown = () => setIsDropdownOpen(false); // Close dropdown
  const isActive = (path: string) => pathname === path;

  return (
    <>

<<<<<<< HEAD
      <header className={`fixed top-0 w-full pt-5 z-50 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <nav className="md:mx-10 py-2 px-2 md:px-5 lg:px-5 flex items-center justify-between md:backdrop-blur-md md:border md:border-gray-300 md:rounded-full transition-all duration-500 ease-in-out">


          <button onClick={toggleMenu} className="md:hidden focus:outline-none p-2 rounded-sm">
            <div className="flex flex-col space-y-1">
              <span className="block w-8 h-1 bg-gray-700"></span>
              <span className="block w-8 h-1 bg-gray-700"></span>
              <span className="block w-8 h-1 bg-gray-700"></span>
            </div>
          </button>
          <div className="hidden md:flex flex-shrink-0">
            <Link href="/">
              <img src="/assets/logo.svg" alt="Logo" />
            </Link>
=======

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className="flex flex-col space-y-1">
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
>>>>>>> 2a87e1d (added carreres)
          </div>

          <ul className="hidden md:flex space-x-6 text-gray-700 flex-1 justify-center transition-all duration-500 ease-in-out">
            <li>
              <Link href="/HowWeHelpScreen" className={isActive("/HowWeHelpScreen") ? "text-fuchsia-500 font-bold" : "text-gray-700"}>
                How We Help
              </Link>
            </li>
            <li>
              <Link href="/WhoAreWe" className="text-gray-700">Who We Are</Link>
            </li>
            <li>
              <Link href="/CareersScreen" className={isActive("/CareersScreen") ? "text-fuchsia-500 font-bold" : "text-gray-700"}>
                Careers
              </Link>
            </li>
            <li className="relative">
              <button onClick={toggleDropdown} className="text-gray-700 focus:outline-none">
                Services
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <li>
                    <Link href="/BlockChainService" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Block Chain</Link>
                  </li>
                  <li>
                    <Link href="/GameDevelopment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Game Development</Link>
                  </li>
                  <li>
                    <Link href="/AIServices" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">AI Services</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/blog" className={isActive("/blog") ? "text-fuchsia-500 font-bold" : "text-gray-700"}>
                Blogs
              </Link>
            </li>
          </ul>


          <Button className="bg-fuchsia-500 text-white" text="Contact Us" href="/contact" />
        </nav>
      </header>


      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out" onClick={closeMenu}></div>
      )}


      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
  
        <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-700 text-2xl">
          &times;
        </button>

        <nav className="flex flex-col items-start px-6 py-10 space-y-4 text-gray-700">
          <Link href="/">
            <img src="/assets/logo.svg" alt="Logo" />
          </Link>
          <Link href="/HowWeHelpScreen" className={isActive("/HowWeHelpScreen") ? "text-fuchsia-500 font-bold" : "text-gray-700"}>
            How We Help
          </Link>
          <Link href="/WhoAreWe" className="text-gray-700">Who We Are</Link>
          <Link href="/CareersScreen" className={isActive("/CareersScreen") ? "text-fuchsia-500 font-bold" : "text-gray-700"}>
            Careers
          </Link>
          <Link href="#" className="text-gray-700">Services</Link>
          <Link href="/blog" className={isActive("/blog") ? "text-fuchsia-500 font-bold" : "text-gray-700"}>
            Blogs
          </Link>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 mt-4 w-full transition-all duration-500 ease-in-out">
            Contact Us
          </button>
        </nav>
      </div>
<<<<<<< HEAD
    </>
=======

      <ul className={`flex-col md:flex md:flex-row md:space-x-6 text-gray-700 absolute md:static bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-16 left-0 w-full md:w-auto' : 'top-[-200px] md:top-0'} md:top-0 md:flex md:items-center`}>
        <li className="py-2 md:py-0"><Link href="#">How We Help</Link></li>
        <li className="py-2 md:py-0"><Link href="#">Who We Are</Link></li>
        <li className="py-2 md:py-0"><Link href="/components/CareersScreen">Careers</Link></li> 
        <li className="py-2 md:py-0"><Link href="#">Services</Link></li>
        <li className="py-2 md:py-0"><Link href="#">Blogs</Link></li>
      </ul>

      {/* Contact Us Button */}
      <button className="hidden md:block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
        Contact Us
      </button>

      {/* Mobile Contact Us Button */}
      <button className="md:hidden bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
        Contact Us
      </button>
    </nav>
>>>>>>> 2a87e1d (added carreres)
  );
};

export default Navbar;