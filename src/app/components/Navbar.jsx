"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Ecquint IT</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Portfolio</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Careers</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Terms of Services</a>

        </div>

        
        {/* Mobile Menu Button */}
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
