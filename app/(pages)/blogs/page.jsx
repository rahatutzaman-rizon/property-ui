"use client"

import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image'

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/blog')
        setBlogs(res.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-6 mt-16">
        <Skeleton count={3} height={250} className="mb-6" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 mt-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Image
              src={blog.thumbnailUrl}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-lg"
              height={100}
              width={100}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-primary-dark">
                {blog.title}
              </h2>
              <p className="text-gray-500 mb-4">{blog.summary}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/blogs/${blog._id}`}
                  className="text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  <span>Read more</span> <AiOutlineArrowRight />
                </Link>
                <span className="text-sm text-gray-400">
                  {new Date(blog.publishDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
