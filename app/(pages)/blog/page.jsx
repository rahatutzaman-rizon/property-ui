"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const demoPosts = [
    {
      title: "Understanding Portfolio Diversification",
      slug: "understanding-portfolio-diversification",
      author: "Jane Doe",
      excerpt: "An in-depth look at portfolio diversification strategies and how they can optimize risk-adjusted returns in asset management.",
      image: "https://i.ibb.co/ZgSFhmt/anastasia-yaroshenko-q-Ea-YOM4-Yq-HQ-unsplash.jpg",
      youtube: "https://www.youtube.com/embed/z569rEDGU1s",
      views: 1200,
      comments: 45,
      date: "2024-09-01",
      category: "Investment Strategies"
    },
    {
      title: "Mastering Risk Management in Asset Allocation",
      slug: "mastering-risk-management-asset-allocation",
      author: "John Smith",
      excerpt: "A comprehensive guide to mastering risk management techniques in asset allocation for optimal portfolio performance.",
      image: "https://i.ibb.co/3m52MP4/justus-menke-hc7-MCn4vk6g-unsplash.jpg",
      youtube: "https://www.youtube.com/embed/z569rEDGU1s",
      views: 800,
      comments: 30,
      date: "2024-08-25",
      category: "Risk Management"
    },
    {
      title: "Exploring ESG Investment Trends",
      slug: "exploring-esg-investment-trends",
      author: "Emily Davis",
      excerpt: "Discover the latest trends in Environmental, Social, and Governance (ESG) investing and how to apply them to your asset management strategy.",
      image: "https://i.ibb.co/bsCNCqf/chuttersnap-Iboom5tbfvs-unsplash.jpg",
      youtube: "https://www.youtube.com/embed/z569rEDGU1s",
      views: 950,
      comments: 20,
      date: "2024-07-15",
      category: "ESG Investing"
    },
    {
      title: "Creating Dynamic Asset Allocation Models",
      slug: "creating-dynamic-asset-allocation-models",
      author: "Michael Brown",
      excerpt: "Learn how to build dynamic and responsive asset allocation models using the latest quantitative techniques and technologies.",
      image: "https://i.ibb.co/pncCvS5/wendy-liga-a-Sl-IN-fh-KKU-unsplash.jpg",
      youtube: "https://www.youtube.com/embed/z569rEDGU1s",
      views: 1100,
      comments: 60,
      date: "2024-06-30",
      category: "Quantitative Finance"
    },
    {
      title: "The Future of Asset Management",
      slug: "the-future-of-asset-management",
      author: "Sarah Wilson",
      excerpt: "A look into the future of asset management and emerging technologies shaping the industry, including AI, blockchain, and robo-advisors.",
      image: "https://i.ibb.co/nsFfbNg/ryan-spencer-WJDR8-Qx-VR8-unsplash.jpg",
      youtube: "https://www.youtube.com/embed/z569rEDGU1s",
      views: 700,
      comments: 15,
      date: "2024-05-10",
      category: "Industry Trends"
    },
  ];

const BlogPost = ({ post }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
    <Image width={50}  height={50} src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <span className="text-sm font-semibold text-blue-600 mb-2">{post.category}</span>
      <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h2>
      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{post.date}</span>
        <span>{post.views} views</span>
      </div>
    </div>
  </article>
);

const Sidebar = () => (
  <aside className="space-y-8">
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Search</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
      <ul className="space-y-2">
        {['Market Analysis', 'Investment Strategies', 'Design', 'Financial Planning ', 'Risk Management'].map((category) => (
          <li key={category}>
            <a href="#" className="text-primary hover:text-teal-500 transition-colors duration-300 flex items-center">
              <ArrowRight size={16} className="mr-2" />
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h2>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  </aside>
);

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(demoPosts);
    }, 500);
  }, []);

  return (
    <main className="bg-white min-h-screen mt-12">
      <section className="relative py-24 px-4 flex items-center justify-center ">
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl">Stay updated with the latest in jmc asset management ltd</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <BlogPost key={index} post={post} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center">
                Load More
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </main>
  );
}