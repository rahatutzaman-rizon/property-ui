'use client';

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
    <div className="relative h-screen overflow-hidden ">
      {/* Carousel-style Background Image Slider */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
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
      <div className="absolute inset-0 flex items-center px-8 md:px-12 lg:px-24  sm:ml-8 md:ml-56">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">
            Discover | Dream | Live
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Unlock Your Ideal Space
          </h1>
          <p className="text-lg text-primary mb-8">
            JMC Asset Management is dedicated to providing top-tier asset management services. 
            Our expertise ensures that your assets are managed with the highest level of professionalism and care.
          </p>
          <Link href="/" passHref>
            <Button className="">
              See More »
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Buttons - Always Visible */}
      <button
        onClick={() => changeImage('prev')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full bg-primary  transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={() => changeImage('next')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full bg-primary transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-primary scale-125'
                : 'bg-teal-700 '
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;