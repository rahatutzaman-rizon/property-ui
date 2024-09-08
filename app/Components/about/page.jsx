"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const AboutUs = () => {
  const [seoData, setSeoData] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        const response = await fetch('http://localhost:5000/banner/');
        if (!response.ok) {
          throw new Error('Failed to fetch SEO data');
        }
        const data = await response.json();
        setSeoData(data[0] || {}); // Assuming there's at least one object in the array
      } catch (error) {
        console.error('Error fetching SEO data:', error);
        setSeoData({ title: 'About Us - Your Company Name', description: 'Learn more about Your Company Name, our mission, values, and team. Discover why we are the right choice for your needs.' });
      }
    };
    fetchSEOData();
  }, []);

  return (
    <>
      <Head>
        <title>{seoData.title || 'About Us'}</title>
        <meta name="description" content={seoData.description || 'Learn more about our company, mission, values, and team.'} />
      </Head>

      <div className='bg-[#F5FCFF] py-8'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 gap-8 sm:gap-12">
          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side Text */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00567A]">About Us</h2>
              <p className="text-sm sm:text-base font-light lg:text-lg text-[#00567A]">
                At JMC Asset Management, we are dedicated to optimizing your financial future. With decades of experience in the financial sector, we provide expert asset management services tailored to meet the unique needs of each client.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[300px] md:h-[400px]">
                <Image
                  src="https://i.ibb.co/5YFtkXf/maciej-drazkiewicz-l-MYTH-8-V-Jo-unsplash.jpg"
                  alt="JMC Asset Management Team"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Our Mission & Our Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-20">
            {/* Our Mission Card */}
            <div className="bg-white rounded-md p-8 sm:py-8 sm:px-10 transition-transform transform">
              <h5 className="text-xl sm:text-md font-bold text-[#00567A] mb-3 sm:mb-4">Our Mission</h5>
              <p className="text-sm sm:text-md font-normal leading-7 text-[#00567A]">
                Our mission is to empower our clients to achieve their financial goals through strategic asset management. We strive to deliver superior investment performance, personalized service, and innovative solutions that adapt to the ever-changing financial landscape.
              </p>
            </div>
            {/* Our Vision Card */}
            <div className="bg-white rounded-lg p-8 sm:py-8 sm:px-10 transition-transform transform">
              <h3 className="text-xl sm:text-md font-bold text-[#00567A] mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-sm sm:text-md font-normal leading-7 text-[#00567A]">
                We envision being the most trusted partner in asset management, recognized for our integrity, performance, and client-centric approach. Our goal is to set new standards in the industry, leveraging technology and expertise to create sustainable wealth for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
