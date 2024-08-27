"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ClipLoader from 'react-spinners/ClipLoader';
import Button from '../Reusable/Button';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectsData();
  }, []);

  const fetchProjectsData = async () => {
    try {
      const response = await fetch('https://asset-server.bdcare.vip/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const activeProject = projects.find(project => project.status === activeTab);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center text-primary mb-4">Our Projects</h1>
      
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        With years of expertise in asset management, we have consistently delivered robust financial growth for our clients. Our commitment to strategic planning, thorough market analysis, and proactive risk management has established us as a trusted partner in preserving and enhancing asset value.
      </p>
      
      <div className="flex justify-center space-x-4 mb-8">
        {['ongoing', 'completed', 'upcoming'].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-w-[150px] flex items-center justify-between ${
              activeTab === tab
                ? 'bg-teal-400 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab ? (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </Button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <ClipLoader color="#ff5e14" loading={loading} size={50} />
        </div>
      ) : (
        activeProject && (
          <>
            <h2 className="text-2xl mt-4 text-primary font-semibold text-center mb-5">
              {activeProject.status.charAt(0).toUpperCase() + activeProject.status.slice(1)} Projects
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeProject.images.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative h-72 w-full overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-opacity duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 bg-white bg-opacity-10 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </>
        )
      )}
      
      <div className="text-center mt-8">
        <Button className=" border border-primary  ">
          See More »
        </Button>
      </div>
    </div>
  );
}
