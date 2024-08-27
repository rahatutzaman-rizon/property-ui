"use client"

import React, { useState } from 'react';

import Link from 'next/link';
import Button from '../Reusable/Button';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   

    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-between py-4 gap-4">
        
        <div className='px-4 sm:px-6 lg:px-8'>

        <Link href="/" className="text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl">
        JMC Group
                
         
          <p className='text-primary text-sm sm:text-base md:text-lg'>JMC Asset Management Ltd.</p>

          </Link>
        </div>
    
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-primary font-bold">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-1 focus:outline-none">
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                <Link href="/our-team" className="block w-full text-left px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="/history" className="block w-full text-left px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  History
                </Link>
              </div>
            )}
          </div>
          <Link href="/project" className="focus:outline-none text-primary">
            Project
          </Link>
          <Link href="/achivement" className="focus:outline-none text-primary">
            Our Achievement
          </Link>
         <Button>
         <Link href="/contact" className="">
            Contact
          </Link>
         </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <div className="space-y-2">
            <div>
              <button onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 focus:outline-none">
                <span>About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/our-team" className="block w-full text-left py-2 text-sm text-gray-700">
                    Our Team
                  </Link>
                  <Link href="/history" className="block w-full text-left py-2 text-sm text-gray-700">
                    History
                  </Link>
                </div>
              )}
            </div>
            <Link href="/project" className="block w-full text-left py-2">
              Project
            </Link>
            <Link href="/achivement" className="block w-full text-left py-2">
              Our Achievement
            </Link>
              <Button>
              <Link href="/" className="block w-full text-left  ">
              Contact
            </Link>
              </Button>
          </div>
        </nav>
      )}
    </header>

  );
};

export default Header;