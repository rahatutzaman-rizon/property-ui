import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

// Dynamic route generation (SSG-like behavior)
export async function generateStaticParams() {
  const res = await axios.get('http://localhost:5000/blog');
  const blogs = res.data;

  return blogs.map((blog) => ({
    id: blog._id,
  }));
}

// Dynamic rendering for the blog detail page
async function getBlogData(id) {
  const res = await axios.get(`http://localhost:5000/blog/${id}`);
  return res.data;
}

// Header component
const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">My Blog</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Sidebar component
const Sidebar = ({ categories, recentPosts }) => (
  <aside className="w-full md:w-1/3 px-4">
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <Link href={`/category/${category}`} className="text-blue-600 hover:underline">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <ul>
        {recentPosts.map((post, index) => (
          <li key={index} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

// Main BlogDetail component
export default async function BlogDetail({ params }) {
  const blog = await getBlogData(params.id);

  // Mock data for sidebar (replace with actual data in a real application)
  const categories = ['Investment Strategies', 'Personal Finance', 'Market Analysis'];
  const recentPosts = [
    { id: '1', title: 'Understanding Market Trends' },
    { id: '2', title: 'How to Optimize Your Asset Portfolio' },
    { id: '3', title: 'The Basics of Stock Trading' },
  ];

  if (!blog) {
    return <p className="text-center text-2xl mt-24">Blog not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 mt-12">
    
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-2/3 px-4">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={blog.thumbnailUrl}
                alt={blog.title}
                width={1200}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {blog.author}
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">{blog.description}</p>
                  <h2 className="text-2xl font-semibold mb-4">Content</h2>
                  <p className="text-gray-700">{blog.content}</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Additional Images</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {blog.extraImages.map((img, idx) => (
                      <div key={idx}>
                        <Image 
                          src={img.url} 
                          alt={img.altText} 
                          width={200}
                          height={200}
                          className="w-full h-40 object-cover rounded-lg shadow-md" 
                        />
                        <p className="text-sm text-center mt-2 text-gray-600">{img.altText}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
          <Sidebar categories={categories} recentPosts={recentPosts} />
        </div>
      </main>
      
    </div>
  );
}