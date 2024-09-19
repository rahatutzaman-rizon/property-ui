import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import img from '../../public/images/asset.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="mb-6 sm:mb-0">
            <Image
              src={img}
              alt="JMC Asset Management logo"
              width={90}
              height={100}
              className="transition-opacity duration-300 mb-4"
            />
            <p className="font-semibold">JMC Asset Management Ltd.</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="font-bold text-white mb-4">Address</h3>
            <p>MN Tower, House# F-6/1A,</p>
            <p>Aftabnagar, Road# 6A,</p>
            <p>Dhaka-1212,</p>
            <p>Bangladesh</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="font-bold text-white mb-4">Navigate</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-green-400 transition-colors">
                About Us
              </Link>
              <Link href="/project" className="hover:text-green-400 transition-colors">
                Projects
              </Link>
              <Link href="/achivement" className="hover:text-green-400 transition-colors">
                Our Achievements
              </Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">
                Contacts
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <p className="mb-2">Hotline: +880 1321210095</p>
            <p>Email: jmc.asset@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/jmcasset" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="www.linkedin.com/company/jmcasset" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <form className="max-w-md mx-auto">
            <h3 className="font-bold text-white text-center mb-4">Subscribe to Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <p className="text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} JMC Asset Management Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}