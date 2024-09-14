import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, BedDouble, Bath, Move } from 'lucide-react';
import Image from 'next/image';

const properties = [
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  {
    id: 1,
    image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
    price: '120,000,00 ৳',
    beds: 4,
    baths: 4,
    area: 3500,
    location: 'Assure MN Tower, Aftabnagar, Dhaka'
  },
  // Duplicate this object 5 more times to have a total of 6 properties
  // ... (other properties)
];

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2">
<Image
  src={property.image}
  alt={`Property ${property.id}`}
  width={800} // You can set a specific width
  height={600} // You can set a specific height
  className="w-full h-72 object-cover"
/>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-primary mb-2">{property.price}</h3>
      <div className="flex justify-between text-primary mb-2">
        <span className="flex items-center">
          <BedDouble className="w-4 h-4 mr-1" />
          {property.beds} Bed
        </span>
        <span className="flex items-center">
          <Bath className="w-4 h-4 mr-1" />
          {property.baths} Bath
        </span>
        <span className="flex items-center">
          <Move className="w-4 h-4 mr-1" />
          {property.area} sqft
        </span>
      </div>
      <p className="text-primary text-sm">{property.location}</p>
    </div>
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-2 shadow-md"
  >
    <ChevronLeft className="w-6 h-6 text-primary" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-2 shadow-md"
  >
    <ChevronRight className="w-6 h-6 text-primary" />
  </button>
);

const FeaturedProperties = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-primary mb-2">
        Explore Our Featured Properties
      </h2>
      <p className="text-center text-2xl text-primary mb-8">
        Find the Place Where Memories Begin.
      </p>
      
      <div className="relative">
        <Slider {...settings}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </Slider>
      </div>
      
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-white text-primary rounded-md border border-primary hover:bg-teal-800 hover:text-white transition-colors">
          All Properties »
        </button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
