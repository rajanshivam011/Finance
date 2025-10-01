import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
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
    <header>
      {/* Top Right Login/Register or Logout */}
      <div className="md:w-52 h-0 w-32"><img src="/Logo-1.svg" alt="ABDC Journal Quality List" /></div>
      <div className="flex flex-row justify-end gap-3 py-2 px-4">
        {!isLoggedIn ? (
          <>
            <Link
              to="/register"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-[#344d85] hover:bg-[#2a3f6b] active:bg-[#1f2f4f] shadow-sm transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-[#344d85] bg-blue-50 hover:bg-blue-100 active:bg-blue-200 border border-blue-200 shadow-sm transition-colors"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 shadow-sm transition-colors"
          >
            Logout
          </button>
        )}
      </div>

      {/* Logo */}
      < div className="max-w-[1100px] mx-auto flex items-center justify-between py-4 px-4">
        {/* <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Page Header Logo"
            className="h-16 sm:h-20 md:h-100 w-auto object-contain"
          />
        </Link> */}


        {/* Hamburger button for mobile */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-white hover:bg-[#344d85]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div
        className={`bg-white shadow-md lg:shadow-none ${
          menuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="max-w-[1100px] mx-auto py-4 lg:flex justify-center px-4 lg:px-0">
          <nav className="flex flex-col lg:flex-row gap-2 lg:gap-10 text-base font-medium">
            <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-[#344d85] transition-colors duration-300 select-none"> Home</Link>
            <Link
              to="/editorial-team"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-[#344d85] transition-colors duration-300 select-none"
            >
              Editorial Team
            </Link>
            <Link
              to="/current"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-[#344d85] transition-colors duration-300 select-none"
            >
              Current
            </Link>
            <Link
              to="/archives"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-[#344d85] transition-colors duration-300 select-none"
            >
              Archives
            </Link>
            <Link
              to="/announcements"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-[#344d85] transition-colors duration-300 select-none"
            >
              Announcements
            </Link>
            <div className="relative lg:group">
      {/* About Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-[#344d85] transition-colors duration-300 select-none"
      >
        About
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          ${open ? "block" : "hidden"} 
          lg:group-hover:block 
          lg:absolute lg:top-full lg:left-0 
          mt-1 lg:w-64 w-full 
          bg-white border rounded-lg shadow-lg 
          transition-all duration-200 z-50
        `}
      >
        <Link
          to="/about"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          About the Journal
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          Publication Ethics and Publication Malpractice Statements
        </Link>
        <Link
          to="/submissions"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          Submissions
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
