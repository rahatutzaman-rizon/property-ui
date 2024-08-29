"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [editImageUrl, setEditImageUrl] = useState('');
  const [editImageIndex, setEditImageIndex] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Add a new image to the selected project
  const addImageToProject = async () => {
    if (!selectedProject || !newImageUrl) return;

    try {
      const response = await axios.post(`http://localhost:5000/projects/${selectedProject._id}/images`, {
        imageUrl: newImageUrl,
      });
      setSelectedProject(response.data); // Update the selected project with the new image
      setNewImageUrl('');
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };

  // Update an existing image in the selected project
  const updateImageInProject = async () => {
    if (!selectedProject || editImageIndex === null || !editImageUrl) return;

    try {
      const response = await axios.put(`http://localhost:5000/projects/${selectedProject._id}/images/${editImageIndex}`, {
        imageUrl: editImageUrl,
      });
      setSelectedProject(response.data); // Update the selected project with the updated image
      setEditImageUrl('');
      setEditImageIndex(null);
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  return (
    <div className="App">
      <h1>Project Image Manager</h1>

      <div>
        <h2>Select a Project</h2>
        <select onChange={(e) => setSelectedProject(JSON.parse(e.target.value))} defaultValue="">
          <option value="" disabled>Select a project</option>
          {projects.map((project) => (
            <option key={project._id} value={JSON.stringify(project)}>
              {project._id} - {project.status}
            </option>
          ))}
        </select>
      </div>

      {selectedProject && (
        <>
          <h3>Images in Project</h3>
          <ul>
            {selectedProject.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Project ${index}`} width="100" />
                <button onClick={() => {
                  setEditImageIndex(index);
                  setEditImageUrl(image);
                }}>
                  Edit
                </button>
              </li>
            ))}
          </ul>

          <div>
            <h4>Add New Image</h4>
            <input
              type="text"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="Enter image URL"
            />
            <button onClick={addImageToProject}>Add Image</button>
          </div>

          {editImageIndex !== null && (
            <div>
              <h4>Edit Image</h4>
              <input
                type="text"
                value={editImageUrl}
                onChange={(e) => setEditImageUrl(e.target.value)}
                placeholder="Enter new image URL"
              />
              <button onClick={updateImageInProject}>Update Image</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
