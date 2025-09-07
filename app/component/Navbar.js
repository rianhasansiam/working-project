"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: 'Mentors', path: '/mentors' },
    { name: 'Blog', path: '/blog' },
    
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const productSubMenu = [
    { 
      name: 'AI Mock Interview', 
      path: '/products/ai-mock-interview',
      description: 'Practice with AI interviewer'
    },
    { 
      name: 'Written Tests', 
      path: '/products/written-tests',
      description: 'Coding & aptitude tests'
    },
    { 
      name: 'CV Compatibility Test', 
      path: '/products/cv-scanner',
      description: 'Match CV to job description'
    },
  
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <div className="h-12 w-12 bg-gradient-to-r   rounded-lg  overflow-hidden flex justify-center items-center">
              <Image src="/logo.png" alt="YourInterview Logo" width={100}
                height={100} className=" h-24 w-36 object-cover" />
            </div>
            <span className="text-xl mt-2 font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              YourInterview
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsMenuOpen(true)}
              onMouseLeave={() => setIsProductsMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors">
                <span>Products</span>
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${isProductsMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
                  isProductsMenuOpen 
                    ? 'opacity-100 translate-y-0 visible scale-100' 
                    : 'opacity-0 -translate-y-2 invisible scale-95'
                }`}
              >
                {productSubMenu.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex flex-col items-start space-y-1 p-4 hover:bg-purple-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="text-sm text-gray-600">{item.description}</span>
                  </Link>
                ))}
            
              </div>
            </div>

            {/* Other Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Login
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {/* Mobile Products Section */}
            <div className="space-y-2">
              <div className="font-medium text-sm text-gray-500 px-3 py-2">Products</div>
              {productSubMenu.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Other Links */}
            <div className="border-t border-gray-200 pt-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="border-t border-gray-200 pt-2 space-y-2 px-3">
              <button 
                className="w-full text-left py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </button>
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-900 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


