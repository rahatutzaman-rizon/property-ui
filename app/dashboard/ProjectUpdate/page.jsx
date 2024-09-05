"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit2, Search, Plus, X, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ status: 'ongoing', images: [] });
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [updateProject, setUpdateProject] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error("Failed to fetch projects. Please try again.");
    }
  };

  const handleStatusChange = (e) => {
    setNewProject({ ...newProject, status: e.target.value });
  };

  const handleImageUpload = (e, isUpdate = false) => {
    const images = Array.from(e.target.files);
    if (isUpdate) {
      setUpdateProject({ ...updateProject, newImages: images });
    } else {
      setNewProject({ ...newProject, images });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('status', newProject.status);
    newProject.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await axios.post(`${BASE_URL}/projects`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchProjects();
      setNewProject({ status: 'ongoing', images: [] });
      setIsAddModalOpen(false);
      toast.success("Project created successfully!");
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error("Failed to create project. Please try again.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('status', updateProject.status);
    if (updateProject.newImages) {
      updateProject.newImages.forEach((image) => {
        formData.append('images', image);
      });
    }

    try {
      await axios.put(`${BASE_URL}/projects/${updateProject._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchProjects();
      setUpdateProject(null);
      toast.success("Project updated successfully!");
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error("Failed to update project. Please try again.");
    }
  };

  const handleDeleteImage = async (projectId, imageUrl) => {
    try {
      const encodedImageUrl = encodeURIComponent(imageUrl);
      await axios.delete(`${BASE_URL}/projects/${projectId}/image/${encodedImageUrl}`);
      fetchProjects();
      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error("Failed to delete image. Please try again.");
    }
  };

  const filteredProjects = projects
    .filter(project => statusFilter === 'all' || project.status === statusFilter)
    .filter(project => project._id.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-primary">Project Management</h1>
      </header>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Filter Projects</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-gray-700 font-semibold">NO</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Status</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Images</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <tr key={project._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-800">{index + 1}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.images.map((imageUrl, idx) => (
                        <div key={idx} className="relative group">
                          <Image
                            src={imageUrl}
                            alt={`Project ${index + 1} Image ${idx + 1}`}
                            width={50}
                            height={50}
                            className="rounded-lg object-cover border"
                          />
                          <button
                            className="absolute -top-2 -right-2 bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100 transition group-hover:opacity-100 opacity-0"
                            onClick={() => handleDeleteImage(project._id, imageUrl)}
                          >
                            <Trash2 size={16} className="text-red-600" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button
                      onClick={() => setUpdateProject(project)}
                      className="flex items-center px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      <Edit2 size={16} className="mr-1" /> Edit
                    </button>
                   
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center" colSpan="4">No projects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Project Modal */}
      {updateProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setUpdateProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Update Project</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Status</label>
                <select
                  value={updateProject.status}
                  onChange={(e) => setUpdateProject({ ...updateProject, status: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Add New Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleImageUpload(e, true)}
                  className="w-full text-gray-700"
                  accept="image/*"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setUpdateProject(null)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTable;
