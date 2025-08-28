import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 20l9-5-9-5-9 5 9 5z" />
            <path d="M12 12V4" />
          </svg>
          <span className="text-2xl font-bold tracking-wide">LearnYard</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/courses"
            className="hover:text-blue-200 transition font-medium"
          >
            Courses
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-200 transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;