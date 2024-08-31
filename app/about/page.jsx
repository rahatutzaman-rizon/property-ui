"use client";

import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='bg-[#F5FCFF]'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 gap-8 sm:gap-12   ">
      {/* About Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Side Text */}
        <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">About JMC Asset Management</h2>
          <p className="text-sm sm:text-base lg:text-lg text-primary">
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
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">Our Mission</h3>
          <p className="text-sm sm:text-base text-primary">
            Our mission is to empower our clients to achieve their financial goals through strategic asset management. We strive to deliver superior investment performance, personalized service, and innovative solutions that adapt to the ever-changing financial landscape.
          </p>
        </div>
        {/* Our Vision Card */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">Our Vision</h3>
          <p className="text-sm sm:text-base text-primary">
            We envision being the most trusted partner in asset management, recognized for our integrity, performance, and client-centric approach. Our goal is to set new standards in the industry, leveraging technology and expertise to create sustainable wealth for our clients.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
