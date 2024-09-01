"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientTable() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ reviewText: '' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:5000/client');
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast.error('Failed to fetch clients');
    }
  };

  const addClient = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('reviewText', newClient.reviewText);
      if (file) {
        formData.append('image', file);
      }

      const response = await fetch('http://localhost:5000/client', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        fetchClients();
        setNewClient({ reviewText: '' });
        setFile(null);
        toast.success('Client added successfully');
      } else {
        throw new Error('Failed to add client');
      }
    } catch (error) {
      console.error('Error adding client:', error);
      toast.error('Failed to add client');
    }
  };

  const deleteClient = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/client/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchClients();
        toast.success('Client deleted successfully');
      } else {
        throw new Error('Failed to delete client');
      }
    } catch (error) {
      console.error('Error deleting client:', error);
      toast.error('Failed to delete client');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Client Reviews</h1>
      <form onSubmit={addClient} className="mb-4 space-y-2">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <input
          type="text"
          placeholder="Review Text"
          value={newClient.reviewText}
          onChange={(e) => setNewClient({ ...newClient, reviewText: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Client
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Review
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
      <Image
        src={client.imageUrl}
        alt="Client"
        width={64} // Set width in pixels
        height={64} // Set height in pixels
        className="object-cover rounded"
      />
    </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {client.reviewText}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <button
                    onClick={() => deleteClient(client._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
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
  );
}