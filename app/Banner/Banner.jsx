"use client"; // Ensure this is at the top

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from '../Reusable/Button';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://i.ibb.co/HNHYnfW/sophie-Gz3iikctf-Ew-unsplash.jpg',
    'https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png',
    'https://i.ibb.co/HNHYnfW/sophie-Gz3iikctf-Ew-unsplash.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel-style Background Image Slider */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="absolute inset-0 flex transition-transform duration-700 ease-in-out h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === currentImageIndex}
            />
            <div className="absolute inset-0 bg-white bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="max-w-7xl mx-auto absolute inset-0 flex items-center px-8">
      {/* <div className="relative z-10 flex items-center px-8 md:px-12 lg:px-24 h-full"> */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary text-opacity-70 uppercase tracking-widest mb-4 space-x-4">
            <span>Discover</span> <span>|</span> <span>Dream</span><span>|</span><span>Live</span>
          </p>
          <h1 className="md:text-5xl lg:text-8xl text-4xl font-bold text-primary leading-tight my-10">
            Unlock Your Ideal Space
          </h1>
          <p className="text-md text-primary mb-8 text-opacity-70">
            JMC Asset Management is dedicated to providing top-tier asset management services. 
            Our expertise ensures that your assets are managed with the highest level of professionalism and care.
          </p>
          <Link href="/" passHref>
            <Button className=" border border-cyan bg-cyan-100/30 ">
              Get in touch with us »
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-primary scale-125'
                : 'border-primary border'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
