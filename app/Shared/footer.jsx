

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import map from '../Asset/footer/map-01.png';
import logo from '../../public/images/asset.svg';
import phone from '../Asset/footer/phone-call-01.png';
import mail from '../Asset/footer/mail-05.png';
import instragram from '../Asset/footer/instragram.png';
import twitter from '../Asset/footer/twitter.png';

import facebook from '../Asset/footer/facebook.png';

import send from '../Asset/footer/Icon.png';



export default function Footer() {
  return (
    <footer className="bg-[#002233] text-[#DDF0FF] py-20 " >
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Image src={logo} alt="JMC Asset Management" width={100} height={40} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-8" >
            <div className="flex items-start space-x-4">
              <Image src={map} alt="Address" width={18} height={18} />
              <p className="text-sm">
                MN Tower, House #1, Road# 1, Aftabnagar
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={phone} alt="Phone" width={18} height={18} />
              <p className="text-sm">+880 1321 210095</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={mail} alt="Email" width={18} height={18} />
              <p className="text-sm">jmc.asset@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="text-sm space-y-4">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/legal">Legal</Link></li>
              <li><Link href="/board-of-directors">Board of Directors</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/contacts">Contacts</Link></li>
            </ul>
          </div>

          {/* Stay up to date */}
          <div className=''>
            <p className="text-lg mb-2 ">Stay up to date.</p>
            <form className="flex mb-4 mt-4">
              <input
                type="email"
                placeholder="jmc.asset@gmail.com"
                className="bg-white text-gray-800 px-3 py-2 text-sm rounded-l-md w-54 "
              />
              <button
                type="submit"
                className="bg-white border-l border-white text-white px-3 py-3 rounded-r-md "
              >
                <Image src={send} alt="Send" width={16} height={16} />
              </button>
            </form>
            <p className="text-lg mb-2 mt-8">Follow us on</p>

            <div className="w-32 h-0.5 bg-[#00476B]  mb-2"></div>

            <div className="flex space-x-4 gap-4 mt-4" >
              <Link href="#" className="hover:opacity-80 transition duration-300">
                <Image src={twitter} alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition duration-300">
                <Image src={facebook} alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition duration-300">
                <Image src={instragram} alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}