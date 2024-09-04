"use client"

import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import AboutUs from "./about/page";
import ClientsReviews from "./client/page";
import Achievement from "./achivement/page";
import Projects from "./project/page";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";

export default function Home() {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <main className="bg-white">
      <Banner />
      <AboutUs />
      <Projects />
      <Achievement />
      <Gallery />
      <ClientsReviews />
    </main>
  );
}
