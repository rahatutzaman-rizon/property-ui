"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Settings, HelpCircle, Delete, Goal } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/dashboard/ProjectCreate', icon: User, label: 'ProjectCreate' },

   
    { href: '/dashboard/ProjectUpdate', icon: Goal, label: 'ProjectUpdate' },
    { href: '/dashboard/ProjectDelete', icon: Delete, label: 'ProjectDelete' },
    
  ];

  return (
    <nav className="h-full">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold">My Dashboard</h1>
      </div>
      <ul className="mt-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} 
                  className={`flex items-center px-4 py-3 ${
                    pathname === item.href ? 'bg-primary-dark' : 'hover:bg-primary-light'
                  } transition-colors duration-200`}>
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;