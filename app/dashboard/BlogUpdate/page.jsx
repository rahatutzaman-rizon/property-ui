"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

// const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

export default function EditPost() {

  const [post, setPost] = useState({
    title: '',
    slug: '',
    author: '',
    publishDate: '',
    tags: [],
    categories: [],
    summary: '',
    description: '',
    content: '',
    status: 'draft',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    {
      fetchPost();
    }
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setPost(prev => ({ ...prev, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error('Failed to update post');
      router.push('/');
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete post');
        router.push('/');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => router.back()} className="text-blue-600 hover:text-blue-800">
          ← Back
        </button>
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <div className="space-x-2">
          <button onClick={() => {}} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Preview
          </button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Post Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={post.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label htmlFor="slug" className="block text-gray-700 text-sm font-bold mb-2">Slug</label>
              <input
                id="slug"
                name="slug"
                type="text"
                value={post.slug}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author</label>
              <input
                id="author"
                name="author"
                type="text"
                value={post.author}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="publishDate" className="block text-gray-700 text-sm font-bold mb-2">Publish Date</label>
              <input
                id="publishDate"
                name="publishDate"
                type="datetime-local"
                value={post.publishDate.slice(0, 16)}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="summary" className="block text-gray-700 text-sm font-bold mb-2">Summary</label>
            <textarea
              id="summary"
              name="summary"
              value={post.summary}
              onChange={handleChange}
              rows={3}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={post.description}
              onChange={handleChange}
              rows={3}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Content</h2>
          <SunEditor
            setContents={post.content}
            onChange={handleEditorChange}
            setOptions={{
              height: 400,
              buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['removeFormat'],
                '/',
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video'],
                ['fullScreen', 'showBlocks', 'codeView'],
                ['preview', 'print'],
                ['save', 'template'],
              ],
            }}
          />
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Metadata</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={post.tags.join(', ')}
                onChange={(e) => setPost(prev => ({ ...prev, tags: e.target.value.split(',').map(tag => tag.trim()) }))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="categories" className="block text-gray-700 text-sm font-bold mb-2">Categories</label>
              <input
                id="categories"
                name="categories"
                type="text"
                value={post.categories.join(', ')}
                onChange={(e) => setPost(prev => ({ ...prev, categories: e.target.value.split(',').map(category => category.trim()) }))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
            <select
              id="status"
              name="status"
              value={post.status}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}