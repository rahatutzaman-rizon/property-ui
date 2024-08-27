"use client";

import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      src: "https://i.ibb.co/ZgSFhmt/anastasia-yaroshenko-q-Ea-YOM4-Yq-HQ-unsplash.jpg",
      width: 1200,
      height: 800,
    },
    {
      src: "https://i.ibb.co/3m52MP4/justus-menke-hc7-MCn4vk6g-unsplash.jpg",
      width: 1200,
      height: 800,
    },
    {
      src: "https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg",
      width: 1200,
      height: 800,
    },
    {
      src: "https://i.ibb.co/pncCvS5/wendy-liga-a-Sl-IN-fh-KKU-unsplash.jpg",
      width: 1200,
      height: 800,
    },
    {
      src: "https://i.ibb.co/nsFfbNg/ryan-spencer-WJDR8-Qx-VR8-unsplash.jpg",
      width: 1200,
      height: 800,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setActiveIndex(1);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    setActiveIndex(1);
  };

  const visibleImages = [
    images[(startIndex - 1 + images.length) % images.length],
    images[startIndex],
    images[(startIndex + 1) % images.length],
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl mt-2 text-center text-primary font-bold mb-8">
        Welcome to our gallery
      </h1>
      <div className="flex justify-center items-center h-[40vh] md:h-[50vh] overflow-hidden">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className={`w-1/3 h-full transition-all duration-300 ${
              index === activeIndex ? "scale-110 z-10" : "scale-90 opacity-50"
            }`}
          >
            <Image
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              width={img.width}
              height={img.height}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;