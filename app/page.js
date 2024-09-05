"use client"

import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import AboutUs from "./about/page";
import ClientsReviews from "./client/page";

import Projects from "./project/page";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Achievement from './achievement/page';

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
       <Achievement></Achievement>
      <Gallery />
      <ClientsReviews />
    </main>
  );
}
