import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-neon-blue tracking-wide">
          LMS
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/courses" className="hover:text-blue-300 transition">Courses</Link>
          <Link to="/signup" className="hover:text-blue-300 transition">Sign Up</Link>
          <Link to="/signin" className="hover:text-blue-300 transition">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

