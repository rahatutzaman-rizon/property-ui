"use client"



import {  useState } from 'react';


export default function UpdateVideo() {
  

  const [videoData, setVideoData] = useState({ title: '', description: '', link: '' });



  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">Update Video</h1>

      <form className="bg-white p-6 rounded-lg shadow-md" >
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={videoData.title}
          onChange={(e) => setVideoData({ ...videoData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={videoData.description}
          onChange={(e) => setVideoData({ ...videoData, description: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="YouTube Link"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={videoData.link}
          onChange={(e) => setVideoData({ ...videoData, link: e.target.value })}
          required
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Update Video</button>
      </form>
    </div>
  );
}
