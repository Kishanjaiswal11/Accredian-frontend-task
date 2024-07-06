import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white fixed top-0 w-full z-50 ${
        hasShadow ? "shadow-xl" : ""
      } transition-shadow duration-50`}
    >
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-blue-600 text-xl font-bold">accredian</div>
          <div className="text-black text-xs">credentials that matter</div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#refer" className="text-blue-600">
            Refer & Earn
          </a>
          <a href="#resources" className="text-gray-600">
            Resources
          </a>
          <a href="#about" className="text-gray-600">
            About Us
          </a>
          <a href="#login" className="text-gray-600 ">
            Login
          </a>
          <div>
            <a href="#try" className="bg-blue-500 text-white px-4 py-2 rounded">
              Try for free
            </a>
          </div>
        </div>
        <button className="md:hidden text-blue-600" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 px-4 pb-4">
          <a href="#refer" className="text-blue-600">
            Refer & Earn
          </a>
          <a href="#resources" className="text-gray-600">
            Resources
          </a>
          <a href="#about" className="text-gray-600">
            About Us
          </a>
          <a href="#login" className="text-gray-600">
            Login
          </a>
          <a href="#try" className="bg-blue-500 text-white px-4 py-2 rounded">
            Try for free
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
