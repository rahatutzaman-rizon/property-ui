"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const properties = {
  malibag: [
    { id: 1, title: 'Ronak Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 2, title: 'Joba Mansion', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 3, title: 'JMC Housing', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 4, title: 'Pinpoint Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
  ],
  gulshan: [
    { id: 5, title: 'Gulshan 001', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 6, title: 'Gulshan 002', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 7, title: 'Gulshan 003', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 8, title: 'Gulshan 004', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
  ],
  rampura: [
    { id: 9, title: 'Ronak Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 10, title: 'Joba Mansion', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 11, title: 'JMC Housing', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 12, title: 'Pinpoint Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
  ],
  baridhara: [
    { id: 13, title: 'JMC Housing', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 14, title: 'Ronak Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 15, title: 'Pinpoint Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 16, title: 'Joba Mansion', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
  ],
  banasree: [
    { id: 17, title: 'Ronak Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 18, title: 'JMC Housing', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 19, title: 'Pinpoint Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
    { id: 20, title: 'Ronak Villa', image: 'https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg' },
  ],
};

const PropertyListing = () => {
  const [selectedArea, setSelectedArea] = useState('all');

  const filteredProperties = selectedArea === 'all'
    ? properties
    : { [selectedArea]: properties[selectedArea] };

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Find Your Properties</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="all">All Areas</option>
              <option value="malibag">Malibagh</option>
              <option value="gulshan">Gulshan</option>
              <option value="rampura">Rampura</option>
              <option value="baridhara">Baridhara</option>
              <option value="banasree">Banasree</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Dhaka</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {Object.entries(filteredProperties).map(([area, listings]) => (
        <div key={area} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold capitalize text-primary mt-12">{area}</h2>
            <a href="#" className="text-primary hover:underline">See more</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {listings.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-md flex flex-col h-[480px]   overflow-hidden"> {/* Increased overall card height */}
          <div className="relative h-80 flex-shrink-0"> {/* Increased image height */}
            <Image
              src={property.image}
              alt={property.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg mb-2 text-primary">{property.title}</h3>
            <p className="text-primary text-sm flex-grow mb-2"> {/* Added flex-grow to allow text to expand */}
              Lorem the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      ))}
    </div>

        </div>
      ))}
    </div>
  );
};

export default PropertyListing;
