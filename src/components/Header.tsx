import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-cream shadow-lg">
      <nav className="flex items-center justify-between px-[5%] py-2">
        <div className="w-[200px]">
          <Link href="#home" className="flex items-center">
            <Image 
              src="/img/Original_Logo.svg" 
              alt="Bridge Bound Academy Logo" 
              width={180} 
              height={60}
              className="w-auto h-[60px]"
            />
          </Link>
        </div>

        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } fixed lg:relative lg:right-0 flex flex-col lg:flex-row top-[60px] lg:top-0 h-[290px] lg:h-auto w-full lg:w-auto transition-all duration-500 bg-navy lg:bg-transparent text-white lg:text-navy shadow-md lg:shadow-none text-center z-40`}
        >
          <Link
            href="#home"
            onClick={closeMenu}
            className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-medium hover:text-orange transition-colors mt-6 lg:mt-0"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={closeMenu}
            className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-medium hover:text-orange transition-colors mb-5 lg:mb-0"
          >
            Services
          </Link>
          <Link
            href="#about"
            onClick={closeMenu}
            className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-medium hover:text-orange transition-colors mb-5 lg:mb-0"
          >
            About
          </Link>
          <Link
            href="#blog"
            onClick={closeMenu}
            className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-medium hover:text-orange transition-colors mb-5 lg:mb-0"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="lg:hidden py-5 px-4 font-body text-sm font-medium hover:text-orange transition-colors mb-5"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="py-3 px-6 text-base font-bold text-white bg-orange border-2 border-orange rounded-sm hover:bg-orange-dark hover:border-orange-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact
            <i className="fa fa-paper-plane ml-2" aria-hidden="true"></i>
          </Link>
        </div>

        <div
          className={`lg:hidden h-10 w-12 relative cursor-pointer p-4 z-50 ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`w-[71%] h-1 bg-[#231F41] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isMenuOpen ? "rotate-[-315deg] !top-1/2" : "!top-1/4"
            }`}
          ></div>
          <div
            className={`w-[71%] h-1 bg-[#231F41] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-[71%] h-1 bg-[#231F41] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isMenuOpen ? "rotate-[-225deg] !top-1/2" : "!top-3/4"
            }`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;