

import AboutUs from "./about/page";
import ClientsReviews from "./client/page";
import Achievement from "./achivement/page";
import Projects from "./project/page";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";

export default function Home() {
  return (
    <main className="bg-white ">
     <Banner></Banner>
     <AboutUs></AboutUs>
     
     <Projects></Projects>
     <Achievement></Achievement>
     <Gallery></Gallery>
     <ClientsReviews></ClientsReviews>
    </main>
  );
}
