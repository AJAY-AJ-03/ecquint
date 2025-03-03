"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  /*  */
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(19,19,24)] shadow-md z-50">

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo">
          <img src="/media/logo ecquint prasna.jpeg" alt="logo" className="w-[120px] ml-[60px] h-[35px] rounded-[5px]" />
        </div>

        <div className="hidden md:flex space-x-6 h-[30px]">
          <Link href="/" className="text-white hover:rounded-full">Home</Link>
          <Link href="#about" className="text-white hover:font-bold ">About us</Link>
          <Link href="#services" className="text-white hover:font-bold">Services</Link>
          <Link href="#portfolio" className="text-white hover:font-bold">Portfolio</Link>
          <Link href="#blog" className="text-white hover:font-bold">Blog</Link>
          <Link href="#careers" className="text-white hover:font-bold">Careers</Link>
          <Link href="#contact" className="text-white hover:font-bold">Contact Us</Link>
          <Link href="#faq" className="text-white hover:font-bold">FAQ</Link>
          <Link href="#privacy-policy" className="text-white hover:font-bold">Privacy Policy</Link>
          <Link href="#terms-of-service" className="text-white hover:font-bold">Terms of Services</Link>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgb(19,19,24)] shadow-md">
          <a href="/" className="block px-4 py-2 text-white hover:bg-gray-100">Home</a>
          <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-100">About Us</a>
          <a href="#services" className="block px-4 py-2 text-white hover:bg-gray-100">Services</a>
          <a href="#portfolio" className="block px-4 py-2 text-white hover:bg-gray-100">Portfolio</a>
          <a href="#blog" className="block px-4 py-2 text-white hover:bg-gray-100">Blog</a>
          <a href="#careers" className="block px-4 py-2 text-white hover:bg-gray-100">Careers</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-100">Contact Us</a>
          <a href="#faq" className="block px-4 py-2 text-white hover:bg-gray-100">FAQ</a>
          <a href="#privacy-policy" className="block px-4 py-2 text-white hover:bg-gray-100">Privacy Policy</a>
          <a href="#terms-of-service" className="block px-4 py-2 text-white hover:bg-gray-100">Terms of Services</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
