'use client'

import { useState, useEffect } from 'react'
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react'

const API_URL = 'http://localhost:5000/banner/'

export default function BannerManagement() {
  const [banners, setBanners] = useState([])
  const [editingBanner, setEditingBanner] = useState(null)
  const [newBanner, setNewBanner] = useState({ title: '', description: '' })

  useEffect(() => {
    fetchBanners()
  }, [])

  const fetchBanners = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setBanners(data)
    } catch (error) {
      console.error('Error fetching banners:', error)
    }
  }

  const handleEdit = (banner) => {
    setEditingBanner(banner)
    setNewBanner({ title: banner.title, description: banner.description })
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}${id}`, { method: 'DELETE' })
      fetchBanners()
    } catch (error) {
      console.error('Error deleting banner:', error)
    }
  }

  const handleUpdate = async () => {
    try {
      await fetch(`${API_URL}${editingBanner._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBanner),
      })
      setEditingBanner(null)
      setNewBanner({ title: '', description: '' })
      fetchBanners()
    } catch (error) {
      console.error('Error updating banner:', error)
    }
  }

  const handleCreate = async () => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBanner),
      })
      setNewBanner({ title: '', description: '' })
      fetchBanners()
    } catch (error) {
      console.error('Error creating banner:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Seo Management</h2>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          {editingBanner ? 'Edit Banner' : 'Add New Banner'}
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newBanner.title}
            onChange={(e) => setNewBanner({ ...newBanner, title: e.target.value })}
            className="border rounded-md p-2 flex-grow"
          />
          <input
            type="text"
            placeholder="Description"
            value={newBanner.description}
            onChange={(e) => setNewBanner({ ...newBanner, description: e.target.value })}
            className="border rounded-md p-2 flex-grow"
          />
          {editingBanner ? (
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => setEditingBanner(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleCreate}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              <PlusIcon className="inline-block mr-2 h-5 w-5" />
              Add Banner
            </button>
          )}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {banners.map((banner) => (
              <tr key={banner._id}>
                <td className="px-6 py-4 whitespace-nowrap">{banner.title}</td>
                <td className="px-6 py-4">{banner.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(banner)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <PencilIcon className="inline-block h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(banner._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <TrashIcon className="inline-block h-5 w-5" />
                    <span className="sr-only">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}