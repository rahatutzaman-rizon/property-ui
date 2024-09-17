"use client"
 
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);
  const [newVideo, setNewVideo] = useState({
    title: '',
    description: '',
    link: ''
  });

  // Fetch video data
  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://asset-server.bdcare.vip/vedio');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
  };

  // Create or Update video
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingVideo) {
      // Update video
      try {
        await axios.put(`https://asset-server.bdcare.vip/vedio/${editingVideo._id}`, newVideo);
        setEditingVideo(null);
      } catch (error) {
        console.error('Error updating video:', error);
      }
    } else {
      // Create new video
      try {
        await axios.post('https://asset-server.bdcare.vip/vedio', newVideo);
      } catch (error) {
        console.error('Error creating video:', error);
      }
    }
    fetchVideos();
    setNewVideo({ title: '', description: '', link: '' });
  };

  // Edit video
  const handleEdit = (video) => {
    setEditingVideo(video);
    setNewVideo({ title: video.title, description: video.description, link: video.link });
  };

  // Delete video
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://asset-server.bdcare.vip/vedio/${id}`);
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Video Manager</h1>
      
      {/* Form for Creating/Updating Videos */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl mb-4">{editingVideo ? 'Edit Video' : 'Add New Video'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={newVideo.title}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              value={newVideo.description}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">YouTube Link</label>
            <input
              type="text"
              name="link"
              value={newVideo.link}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md"
        >
          {editingVideo ? 'Update Video' : 'Add Video'}
        </button>
      </form>

      {/* Video Table */}
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-500">Title</th>
            <th className="py-2 px-4 text-left font-medium text-gray-500">Description</th>
            <th className="py-2 px-4 text-left font-medium text-gray-500">YouTube Link</th>
            <th className="py-2 px-4 text-left font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video._id} className="border-t">
              <td className="py-2 px-4">{video.title}</td>
              <td className="py-2 px-4">{video.description}</td>
              <td className="py-2 px-4">
                <ReactPlayer url={video.link} width="100%" height="100px" />
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEdit(video)}
                  className="mr-4 text-blue-500 hover:text-blue-700"
                >
                  <AiOutlineEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(video._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
