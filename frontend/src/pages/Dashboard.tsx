import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalAdmins: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/profile");
    }

    const fetchStats = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/admin/dashboard");
        setStats(data);
      } catch (err: any) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-800 text-white">
        <p className="text-xl animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-neon-blue drop-shadow">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-900 p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-lg font-semibold text-blue-200 mb-2">Total Courses</h2>
            <p className="text-3xl font-bold">{stats.totalCourses}</p>
          </div>
          <div className="bg-blue-900 p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-lg font-semibold text-blue-200 mb-2">Total Admins</h2>
            <p className="text-3xl font-bold">{stats.totalAdmins}</p>
          </div>
          <div className="bg-blue-900 p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-lg font-semibold text-blue-200 mb-2">Total Users</h2>
            <p className="text-3xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-blue-900 p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-lg font-semibold text-blue-200 mb-2">Total Revenue</h2>
            <p className="text-3xl font-bold">₹{stats.totalRevenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
