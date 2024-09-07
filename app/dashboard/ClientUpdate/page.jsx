'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API

export default function ClientTable() {
  const [clients, setClients] = useState([])
  const [newClient, setNewClient] = useState({ reviewText: '' })
  const [editingClient, setEditingClient] = useState(null)
  const [file, setFile] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      const response = await fetch(`${BASE_URL}/client`)
      const data = await response.json()
      setClients(data)
    } catch (error) {
      console.error('Error fetching clients:', error)
      toast.error('Failed to fetch clients')
    }
  }

  const addClient = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('reviewText', newClient.reviewText)

      if (file) {
        formData.append('image', file)
      }

      const response = await fetch(`${BASE_URL}/client`, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setNewClient({ reviewText: '' })
        setFile(null)
        toast.success('Client added successfully')
        fetchClients()
        setIsAddModalOpen(false)
      } else {
        toast.error('Failed to add client')
      }
    } catch (error) {
      console.error('Error adding client:', error)
      toast.error('Failed to add client')
    }
  }

  const deleteClient = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/client/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchClients()
        toast.success('Client deleted successfully')
      } else {
        toast.error('Failed to delete client')
      }
    } catch (error) {
      console.error('Error deleting client:', error)
      toast.error('Failed to delete client')
    }
  }

  const editClient = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('reviewText', editingClient.reviewText)

      if (file) {
        formData.append('image', file)
      }

      const response = await fetch(`${BASE_URL}/client/${editingClient._id}`, {
        method: 'PUT',
        body: formData,
      })

      if (response.ok) {
        toast.success('Client updated successfully')
        fetchClients()
        setIsEditModalOpen(false)
        setEditingClient(null)
        setFile(null)
      } else {
        toast.error('Failed to update client')
      }
    } catch (error) {
      console.error('Error updating client:', error)
      toast.error('Failed to update client')
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-900">Client Reviews</h2>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Add Client
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Review
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client, index) => (
                  <tr key={client._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16">
                          <Image
                            src={client.imageUrl || '/default-image.png'}
                            alt={`Client ${index + 1}`}
                            width={64}
                            height={64}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Client {index + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{client.reviewText}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => {
                          setEditingClient(client)
                          setIsEditModalOpen(true)
                        }}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteClient(client._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Client Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="px-6 py-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Add New Client</h3>
            </div>
            <form onSubmit={addClient} className="px-6 py-4 space-y-4">
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                  Client Image
                </label>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>
              <div>
                <label htmlFor="review-text" className="block text-sm font-medium text-gray-700">
                  Review Text
                </label>
                <textarea
                  id="review-text"
                  name="review-text"
                  rows={3}
                  value={newClient.reviewText}
                  onChange={(e) => setNewClient({ ...newClient, reviewText: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter client review here..."
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {isEditModalOpen && editingClient && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="px-6 py-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Edit Client</h3>
            </div>
            <form onSubmit={editClient} className="px-6 py-4 space-y-4">
              <div>
                <label htmlFor="edit-file-upload" className="block text-sm font-medium text-gray-700">
                  Update Client Image
                </label>
                <input
                  id="edit-file-upload"
                  name="edit-file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>
              <div>
                <label htmlFor="edit-review-text" className="block text-sm font-medium text-gray-700">
                  Review Text
                </label>
                <textarea
                  id="edit-review-text"
                  name="edit-review-text"
                  rows={3}
                  value={editingClient.reviewText}
                  onChange={(e) => setEditingClient({ ...editingClient, reviewText: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter updated client review here..."
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
