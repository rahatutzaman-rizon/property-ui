"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../Reusable/Button";
import Image from "next/image";
import img from "../../public/images/asset.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../firebase/config";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const router = useRouter();
  const [user] = useAuthState(auth);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsAboutDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsAboutDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const DropdownLink = ({ href, children }) => (
    <Link
      href={href}
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );

  const NavLink = ({ href, children }) => (
    <Link href={href} className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </Link>
  );

  return (
    <header className="fixed top-0  w-full z-50 backdrop-blur-md bg-opacity-50 border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
              sizes="100px"
                src={img}
                alt="jmc asset management logo"
                width={80}
                className="rounded-lg transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={toggleAboutDropdown}
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
              >
                <span>About Us</span>
                {/* <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg> */}
              </button>
              {/* {isAboutDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <DropdownLink href="/about">Our Team</DropdownLink>
                  <DropdownLink href="/about">History</DropdownLink>
                </div>
              )} */}
            </div>
            <NavLink href="/project">Project</NavLink>
            <NavLink href="/">Blogs</NavLink>
            <NavLink href="/achievement">Achievement</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            {user ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={toggleProfileDropdown}
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  <span>Profile</span>
                  <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <DropdownLink href="/dashboard">Dashboard</DropdownLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
            className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            About Us
          </button>
          {/* {isAboutDropdownOpen && (
            <div className="pl-4 space-y-1">
              <DropdownLink href="/about">Our Team</DropdownLink>
              <DropdownLink href="/about">History</DropdownLink>
            </div>
          )} */}
          <NavLink href="/project">Project</NavLink>
          <NavLink href="/blog">Blogs</NavLink>
          <NavLink href="/achievement">Our Achievement</NavLink>
          {user ? (
            <>
              <NavLink href="/dashboard">Dashboard</NavLink>
              <button
                onClick={handleLogout}
                className=""
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink href="/login">Sign in</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;