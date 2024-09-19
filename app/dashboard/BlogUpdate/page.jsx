"use client"


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://asset-server.bdcare.vip/blog';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    author: '',
    publishDate: '',
    tags: '',
    categories: '',
    summary: '',
    description: '',
    content: '',
    thumbnailUrl: '',
    extraImages: '',
    seo: {
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      canonicalUrl: ''
    },
    status: 'draft'
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleOpenModal = (blog = null) => {
    setIsEditing(!!blog);
    setSelectedBlog(blog);
    setForm(blog ? {
      ...blog,
      tags: blog.tags.join(', '),
      categories: blog.categories.join(', '),
      extraImages: blog.extraImages.map(img => img.url).join(', '),
      seo: {
        ...blog.seo,
        metaKeywords: blog.seo.metaKeywords.join(', ')
      }
    } : {
      title: '',
      slug: '',
      author: '',
      publishDate: '',
      tags: '',
      categories: '',
      summary: '',
      description: '',
      content: '',
      thumbnailUrl: '',
      extraImages: '',
      seo: {
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        canonicalUrl: ''
      },
      status: 'draft'
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      ...form,
      tags: form.tags.split(',').map(tag => tag.trim()),
      categories: form.categories.split(',').map(cat => cat.trim()),
      extraImages: form.extraImages.split(',').map(url => ({ url })),
      seo: {
        ...form.seo,
        metaKeywords: form.seo.metaKeywords.split(',').map(keyword => keyword.trim())
      }
    };

    try {
      if (isEditing) {
        await axios.put(`${BASE_URL}/${selectedBlog._id}`, blogData);
      } else {
        await axios.post(BASE_URL, blogData);
      }
      handleCloseModal();
      setBlogs(prevBlogs => isEditing
        ? prevBlogs.map(blog => blog._id === selectedBlog._id ? blogData : blog)
        : [...prevBlogs, blogData]
      );
    } catch (error) {
      console.error('Failed to save blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Blog Management</h1>
      <button
        onClick={() => handleOpenModal()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Blog
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Author</th>
            <th className="px-4 py-2 border-b">Publish Date</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog._id}>
              <td className="px-4 py-2 border-b">{blog.title}</td>
              <td className="px-4 py-2 border-b">{blog.author}</td>
              <td className="px-4 py-2 border-b">{blog.publishDate}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleOpenModal(blog)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md max-w-md w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="Slug"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="publishDate"
                type="date"
                value={form.publishDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="Tags (comma separated)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="categories"
                value={form.categories}
                onChange={handleChange}
                placeholder="Categories (comma separated)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                placeholder="Summary"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Content"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="thumbnailUrl"
                value={form.thumbnailUrl}
                onChange={handleChange}
                placeholder="Thumbnail URL"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="extraImages"
                value={form.extraImages}
                onChange={handleChange}
                placeholder="Extra Images URLs (comma separated)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="seo.metaTitle"
                value={form.seo.metaTitle}
                onChange={handleChange}
                placeholder="SEO Meta Title"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="seo.metaDescription"
                value={form.seo.metaDescription}
                onChange={handleChange}
                placeholder="SEO Meta Description"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="seo.metaKeywords"
                value={form.seo.metaKeywords}
                onChange={handleChange}
                placeholder="SEO Meta Keywords (comma separated)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="seo.canonicalUrl"
                value={form.seo.canonicalUrl}
                onChange={handleChange}
                placeholder="SEO Canonical URL"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="status"
                value={form.status}
                onChange={handleChange}
                placeholder="Status (draft/published)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {isEditing ? 'Update Blog' : 'Create Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;

