import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow-lg rounded">
      {/* Top Bar with Logo and Login/Logout */}
      <div className="max-w-7xl mx-auto flex items-center justify-between md:px-4 py-3 sm:px-6 lg:px-8 p-2">
        <div className="flex items-center bg-white/90 rounded-md p-2">
          <img src="/Logo-1.svg" alt="ABDC Journal Quality List" className="h-12 w-auto sm:h-14" />
        </div>
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="inline-flex items-center rounded-full px-2 py-2 ml-2 text-base font-bold bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center rounded-full px-4 py-2 text-base font-bold bg-purple-50 text-purple-800 hover:bg-purple-100 active:bg-purple-200 border border-purple-200 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="inline-flex items-center rounded-full px-4 py-2 text-base font-bold bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Hamburger button for mobile */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-8 pb-4 lg:pb-0 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 text-base font-bold">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/editorial-team"
              className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Editorial Team
            </Link>
            <Link
              to="/current"
              className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Current
            </Link>
            <Link
              to="/archives"
              className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Archives
            </Link>
            <Link
              to="/announcements"
              className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Announcements
            </Link>
            <div className="relative">
              {/* About Button */}
              <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 cursor-pointer rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center"
              >
                About
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`${
                  open ? "block" : "hidden"
                } lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-64 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl transition-all duration-300 ease-in-out z-50`}
              >
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm font-bold hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
                >
                  About the Journal
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm font-bold hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
                >
                  Publication Ethics
                </Link>
                <Link
                  to="/submissions"
                  className="block px-4 py-2 text-sm font-bold hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
                >
                  Submissions
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm font-bold hover:bg-purple-50 hover:text-purple-800 transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;