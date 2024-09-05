"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, User, Settings, HelpCircle, Goal, LogOut } from 'lucide-react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config'; // Adjust the path as needed

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [signOut, , loading] = useSignOut(auth);

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/dashboard/ProjectUpdate', icon: Goal, label: 'Project Update' },
    { href: '/dashboard/ClientUpdate', icon: User, label: 'Client Update' },
  ];

  const handleLogout = async () => {
    await signOut();
    router.push('/'); // Redirect to home page after logout
  };

  return (
    <aside className="flex flex-col h-full bg-white shadow-lg border-r border-gray-200">
      <div className="px-4 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">My Dashboard</h1>
      </div>
      <nav className="flex-grow mt-4">
        <ul className="space-y-2">
          {/* Home Button */}
          <li>
            <Link 
              href="/" 
              className={`flex items-center px-4 py-3 rounded-lg ${
                pathname === '/'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-blue-100'
              } transition-colors duration-200`}
            >
              <Home className="h-5 w-5 mr-3" />
              Home
            </Link>
          </li>

          {/* Other Navigation Links */}
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`flex items-center px-4 py-3 rounded-lg ${
                  pathname === item.href
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-blue-100'
                } transition-colors duration-200`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4 py-6 border-t border-gray-200">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="flex items-center px-4 py-2 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
