"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(19,19,24)] shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
       <div className="logo">
       <img src="/media/logo ecquint prasna.jpeg" alt="logo" className="w-[120] ml-[60px] h-[35] rounded-[5px] " />
       </div>

        <div className="hidden md:flex space-x-6 h-[30]">
          <Link href="/" className="text-white hover:text-gray-900">Home</Link>
          <Link href="#about" className="text-white hover:text-gray-900">About us</Link>
          <Link href="#services" className="text-white hover:text-gray-900">Services</Link>
          <Link href="#portfolio" className="text-white hover:text-gray-900">Portfolio</Link>
          <Link href="#blog" className="text-white hover:text-gray-900">Blog</Link>
          <Link href="#careers" className="text-white hover:text-gray-900">Careers</Link>
          <Link href="#contact" className="text-white hover:text-gray-900">Contact Us</Link>
          <Link href="#faq" className="text-white hover:text-gray-900">FAQ</Link>
          <Link href="#privacy-policy" className="text-white hover:text-gray-900">Privacy Policy</Link>
          <Link href="#terms-of-service" className="text-white hover:text-gray-900">Terms of Services</Link>
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
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Portfolio</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Careers</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQ</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Privacy Policy</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Terms of Services</a>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
