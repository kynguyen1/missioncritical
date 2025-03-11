import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => setUserMenuOpen(!isUserMenuOpen)

  return (
    <div className="p-2 w-full flex space-x-4 bg-MISSIONblack text-white md:px-16">
      <img
        className="h-12 justify-start space-x-1"
        src="/images/rocket-logo.png"
        alt="Mission Critical"
      />
      <div className="p-2 w-full justify-start text-white md:px-16">Mission Critical</div>
      <div className="p-2 w-full flex space-x-4 justify-end text-white md:px-16">
        {/* General Pages */}
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
        </div>

        {/* User Pages Dropdown */}
        <div className="relative">
          <button
            onClick={toggleUserMenu}
            className="hover:underline"
          >
            User Pages
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black p-2 rounded-md shadow-lg">
              <Link to="/dashboard" className="block hover:bg-gray-200 px-4 py-2">Dashboard</Link>
              <Link to="/profile" className="block hover:bg-gray-200 px-4 py-2">Profile</Link>
              <Link to="/pastdata" className="block hover:bg-gray-200 px-4 py-2">Past Data</Link>
              <Link to="/workoutinput" className="block hover:bg-gray-200 px-4 py-2">Workout Input</Link>
            </div>
          )}
        </div>

        {/* Authentication */}
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">Login/Sign-Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav

