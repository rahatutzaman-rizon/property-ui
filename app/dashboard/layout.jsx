"use client"

import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Menu } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row ">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-4 text-gray-500 focus:outline-none focus:bg-gray-100"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'block' : 'hidden'}
        fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden
      `} onClick={() => setSidebarOpen(false)}></div>

      <div className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-in-out transform bg-primary text-white lg:translate-x-0 lg:static lg:inset-0
      `}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;