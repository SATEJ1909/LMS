import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState<{ role?: string; name?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav className="bg-blue-950 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-extrabold text-blue-400 tracking-wide">
        LMS
      </Link>

      <div className="space-x-6 text-md font-medium">
        <Link to="/" className="hover:text-blue-300 transition">Home</Link>
        <Link to="/courses" className="hover:text-blue-300 transition">Courses</Link>

        {user?.role === "admin" && (
          <>
            <Link to="/dashboard" className="hover:text-blue-300 transition">Dashboard</Link>
            <Link to="/admin/create-course" className="hover:text-blue-300 transition">Create Course</Link>
          </>
        )}

        {user ? (
          <>
            <Link to="/profile" className="hover:text-blue-300 transition">Profile</Link>
            <button onClick={handleLogout} className="hover:text-red-400 transition">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="hover:text-blue-300 transition">Sign Up</Link>
            <Link to="/signin" className="hover:text-blue-300 transition">Sign In</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
