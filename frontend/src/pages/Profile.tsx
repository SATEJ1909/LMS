import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

interface User {
  name: string;
  email: string;
  role: "user" | "admin";
}



const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("lmsToken"); // stored during sign-in
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:3000/api/v1/user/profile", {
          headers: {
            Authorization: localStorage.getItem("lmsToken") || ""
          },
        });
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-800">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        {user ? (
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-blue-200">
            <h2 className="text-3xl font-extrabold mb-4 text-blue-800 drop-shadow">
              Profile Overview
            </h2>

            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold text-blue-700">Name:</span> {user.name}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-blue-700">Email:</span> {user.email}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-blue-700">Role:</span>{" "}
                <span className="capitalize">{user.role}</span>
              </p>
            </div>

            {user.role === "admin" ? (
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Go to Dashboard
              </button>
            ) : (
              <p className="mt-6 text-green-600 font-medium">
                You're exploring as a learner.
              </p>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6">
            {/* Animation Placeholder */}
            <div className="w-72 h-72 mx-auto">
              <img
                src="https://via.placeholder.com/300?text=Not+Logged+In"
                alt="Not Logged In"
                className="w-full h-full object-contain"
              />
              {/* You can replace above with <Lottie /> or actual animation */}
            </div>
            <h2 className="text-2xl font-bold text-blue-700">You're not logged in</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Please sign in to view your profile and learning progress.
            </p>
            <button
              onClick={() => navigate("/signin")}
              className="mt-4 bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition"
            >
              Sign In Now
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
