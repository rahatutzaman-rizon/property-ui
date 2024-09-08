"use client";

import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Banner from './Components/Banner/Banner';
import AboutUs from './Components/about/page';
import ProjectPage from './Components/project/page';
import Gallery from './Components/Gallery/Gallery';
import ClientsReviews from './Components/client/page';
import Spinner from '../app/Reusable/Spinner'; // Import the Spinner component

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
