'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, User, Settings, HelpCircle, Goal, LogOut, Workflow, ChevronDown, ChevronRight, CircleDashed, LayoutDashboard } from 'lucide-react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config' // Adjust the path as needed
import { FaBlogger } from 'react-icons/fa'

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [signOut, , loading] = useSignOut(auth)
  const [isLandingPageOpen, setIsLandingPageOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/dashboard/ProjectUpdate', icon: Goal, label: 'Project Update' },
    { href: '/dashboard/ClientUpdate', icon: User, label: 'Client Update' },
    { href: '/dashboard/SeoUpdate', icon: Workflow, label: 'SEO Update' },
    { href: '/dashboard/BlogUpdate', icon: FaBlogger, label: 'Blog Update' },
  ]

  const landingPageItems = [
    { href: '/dashboard/vedioUpdate', label: 'Vedio Update' },
    { href: '/dashboard/landing/features', label: 'Features' },
    { href: '/dashboard/landing/testimonials', label: 'Testimonials' },
  ]

  const settingsItems = [
    { href: '/dashboard/settings/profile', label: 'Profile Settings' },
    { href: '/dashboard/settings/account', label: 'Account Settings' },
  ]

  const helpItems = [
    { href: '/dashboard/help/faq', label: 'FAQ' },
    { href: '/dashboard/help/contact', label: 'Contact Support' },
  ]

  const handleLogout = async () => {
    await signOut()
    router.push('/') // Redirect to home page after logout
  }

  return (
    <aside className="flex flex-col h-full bg-white shadow-lg border-r border-gray-200 p-4">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">My Dashboard</h1>
      </div>
      <nav className="flex-grow mt-4">
        <ul className="space-y-2">
          {/* Home Button */}
          <li>
            <Link
              href="/"
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
                pathname === '/'
                  ? 'bg-blue-100 text-primary'
                  : 'text-gray-700 hover:bg-gray-100'
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
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}

          {/* Landing Page Dropdown */}
          <li>
            <button
              onClick={() => setIsLandingPageOpen(!isLandingPageOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium ${
                pathname.startsWith('/dashboard/landing')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-3" />
                Landing Page
              </div>
              {isLandingPageOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {isLandingPageOpen && (
              <ul className="mt-2 ml-6 space-y-1">
                {landingPageItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-lg text-xs font-medium ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      } transition-colors duration-200`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Settings Dropdown */}
          <li>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium ${
                pathname.startsWith('/dashboard/settings')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </div>
              {isSettingsOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {isSettingsOpen && (
              <ul className="mt-2 ml-6 space-y-1">
                {settingsItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-lg text-xs font-medium ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      } transition-colors duration-200`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Help Dropdown */}
          <li>
            <button
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium ${
                pathname.startsWith('/dashboard/help')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-3" />
                Help
              </div>
              {isHelpOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {isHelpOpen && (
              <ul className="mt-2 ml-6 space-y-1">
                {helpItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-lg text-xs font-medium ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      } transition-colors duration-200`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="px-4 py-4 border-t border-gray-200 bg-gray-50">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
