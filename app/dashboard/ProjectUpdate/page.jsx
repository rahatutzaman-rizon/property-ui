"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Plus, Filter, Trash2, Search } from 'lucide-react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API

export default function ProjectManagement() {
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({ status: 'ongoing', images: [] })
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/projects`)
      const projectsWithAutoId = response.data.map((project, index) => ({
        ...project,
        autoId: index + 1
      }))
      setProjects(projectsWithAutoId)
    } catch (error) {
      console.error('Error fetching projects:', error)
      toast.error("Failed to fetch projects. Please try again.")
    }
  }

  const handleStatusChange = (e) => {
    setNewProject({ ...newProject, status: e.target.value })
  }

  const handleImageUpload = (e) => {
    const images = Array.from(e.target.files)
    setNewProject({ ...newProject, images })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('status', newProject.status)
    newProject.images.forEach((image) => {
      formData.append('images', image)
    })

    try {
      await axios.post(`${BASE_URL}/projects`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      fetchProjects()
      setNewProject({ status: 'ongoing', images: [] })
      setIsAddModalOpen(false)
      toast.success("Project created successfully!")
    } catch (error) {
      console.error('Error creating project:', error)
      toast.error("Failed to create project. Please try again.")
    }
  }

  const handleDeleteImage = async (projectId, imageUrl) => {
    try {
      const encodedImageUrl = encodeURIComponent(imageUrl)
      await axios.delete(`${BASE_URL}/projects/${projectId}/image/${encodedImageUrl}`)
      fetchProjects()
      toast.success("Image deleted successfully!")
    } catch (error) {
      console.error('Error deleting image:', error)
      toast.error("Failed to delete image. Please try again.")
    }
  }

  const filteredProjects = projects.filter(project => {
    // Status filter
    const statusMatch = statusFilter === 'all' || project.status === statusFilter;

    // Search term filter
    if (!searchTerm.trim()) {
      return statusMatch; // If no search term, only apply status filter
    }

    const cleanedSearchTerm = searchTerm.trim().toLowerCase();
    
    // Check if the search term matches the autoId
    const idMatch = project.autoId.toString() === cleanedSearchTerm;

    return statusMatch && idMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Project Hub</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Project
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Filter Projects</h2>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Statuses</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="upcoming">Upcoming</option>
              </select>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Project ID: {project.autoId}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Images:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.images.map((imageUrl, idx) => (
                        <div key={idx} className="relative group">
                          <Image
                            src={imageUrl}
                            alt={`Project ${project.autoId} Image ${idx + 1}`}
                            width={80}
                            height={80}
                            className="rounded-md object-cover border"
                          />
                          <button
                            onClick={() => handleDeleteImage(project._id, imageUrl)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No projects found.</p>
            </div>
          )}
        </div>
      </main>

      {/* Add Project Modal */}
      {isAddModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Add New Project
                    </h3>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                          </label>
                          <select
                            id="status"
                            name="status"
                            value={newProject.status}
                            onChange={handleStatusChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option value="ongoing">Ongoing</option>
                            <option value="completed">Completed</option>
                            <option value="upcoming">Upcoming</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                            Images
                          </label>
                          <input
                            type="file"
                            id="images"
                            name="images"
                            multiple
                            onChange={handleImageUpload}
                            className="mt-1 block w-full text-sm text-gray-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-indigo-50 file:text-indigo-700
                              hover:file:bg-indigo-100"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add Project
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}