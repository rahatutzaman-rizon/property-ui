"use client";

import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Spinner from '../app/Reusable/Spinner'; // Import the Spinner component
import Banner from './(pages)/Banner/Banner';
import AboutUs from './(pages)/about/page';
import ProjectPage from './(pages)/project/page';
import Gallery from './(pages)/Gallery/Gallery';
import ClientsReviews from './(pages)/client/page';

export default function Home() {
  const [bannerLoading, setBannerLoading] = useState(true);

  useEffect(() => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  // Function to set loading to false once banner is loaded
  const handleBannerLoaded = () => {
    setBannerLoading(false);
  };

  return (
    <main className="bg-white">
      {bannerLoading && <Spinner />} {/* Show Spinner while loading */}
      <Banner onLoad={handleBannerLoaded} /> {/* Pass the handleBannerLoaded function as prop */}
      <AboutUs />
      <ProjectPage />
      {/* <Achievement /> */}
      <Gallery />
      <ClientsReviews />
    </main>
  );
}
