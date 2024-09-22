// "use client"

// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight, BedDouble, Bath, Move } from 'lucide-react';
// import Image from 'next/image';

// import img1 from '../Asset/propertiesicon/bed.png';
// import img2 from '../Asset/propertiesicon/bath-tub.png';
// import img3  from '../Asset/propertiesicon/network.png';
// import img4  from '../Asset/propertiesicon/Icon.png';


// const properties = [
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/2Yxwp37/Rectangle-16.png",
//     price: '120,000,00 ৳',
//     beds: 4,
//     baths: 4,
//     area: 3500,
//     location: 'Assure MN Tower, Aftabnagar, Dhaka'
//   },
//   // Duplicate this object 5 more times to have a total of 6 properties
//   // ... (other properties)
// ];

// const PropertyCard = ({ property }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2 mb-6">
// <Image
//   src={property.image}
//   alt={`Property ${property.id}`}
//   width={500} // You can set a specific width
//   height={700} // You can set a specific height
//   className="w-96 h-72 object-cover"
// />
//     <div className="p-4">
//       <h3 className="text-xl font-semibold text-primary mb-2 ">{property.price}</h3>
//       <div className="flex justify-between text-primary mb-2 font-medium">
//         <span className="flex items-center">
//         <Image 
//               src={img1}
//               alt="Area"
//               width={20}
//               height={20}
//               className="mr-2"
//             />

//           {property.beds} Bed
//         </span>
//         <span className="flex items-center">
//         <Image 
//               src={img2}
//               alt="Area"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//           {property.baths} Bath
//         </span>
//         <span className="flex items-center">
//         <Image 
//               src={img3}
//               alt="Area"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//           {property.area} sqft
//         </span>
//       </div>

//       <div className='flex items-center font-medium'>


//       <Image 
//               src={img4}
//               alt="Area"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//       <p className="text-primary text-sm">{property.location}</p>

//       </div>

     
//     </div>
//   </div>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-10  text-[#00567A] font-bold py-2 px-4 sm:py-3 sm:px-5"
//   >
//     <ChevronLeft className="w-6 h-6 text-primary" />
//   </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-10  text-[#00567A] font-bold py-2 px-4 sm:py-3 sm:px-5"
//   >
//     <ChevronRight className="w-6 h-6 text-primary" />
//   </button>
// );

// const FeaturedProperties = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };




  

//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <h2 className="text-4xl font-bold text-center text-primary mb-2">
//         Explore Our Featured Properties
//       </h2>
//       <p className="text-center text-md text-primary mb-8">
//         Find the Place Where Memories Begin.
//       </p>
      
//       <div className="relative">
//         <Slider {...settings}>
//           {properties.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </Slider>
//       </div>
      
//       <div className="text-center mt-8">
//         <button className="px-6 py-2 bg-white text-primary rounded-md border border-primary hover:bg-teal-800 hover:text-white transition-colors">
//           All Properties »
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProperties;




"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import img1 from '../Asset/propertiesicon/bed.png';
import img2 from '../Asset/propertiesicon/bath-tub.png';
import img3 from '../Asset/propertiesicon/network.png';
import img4 from '../Asset/propertiesicon/Icon.png';


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
  <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2 mb-6">
    <Image
      src={property.image}
      alt={`Property ${property.id}`}
      width={500} // Set a specific width
      height={700} // Adjust height for better aspect ratio on smaller devices
      className="w-96 h-72 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-primary mb-2">{property.price}</h3>
      <div className="flex justify-between text-primary mb-2 font-medium">
        <span className="flex items-center">
          <Image src={img1} alt="Beds" width={20} height={20} className="mr-2" />
          {property.beds} Bed
        </span>
        <span className="flex items-center">
          <Image src={img2} alt="Baths" width={20} height={20} className="mr-2" />
          {property.baths} Bath
        </span>
        <span className="flex items-center">
          <Image src={img3} alt="Area" width={20} height={20} className="mr-2" />
          {property.area} sqft
        </span>
      </div>
      <div className='flex items-center font-medium'>
        <Image src={img4} alt="Location" width={20} height={20} className="mr-2" />
        <p className="text-primary text-sm">{property.location}</p>
      </div>
    </div>
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 text-[#00567A] font-bold py-2 px-4"
  >
    <ChevronLeft className="w-6 h-6 text-primary" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 text-[#00567A] font-bold py-2 px-4"
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
      <p className="text-center text-md text-primary mb-8">
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

