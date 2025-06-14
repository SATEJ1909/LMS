import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const phrases = [
    "Learn new skills",
    "Upgrade your knowledge",
    "Empower your future",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index === phrases.length) return;

    const interval = setInterval(() => {
      setText(phrases[index].slice(0, subIndex));

      if (forward) {
        if (subIndex < phrases[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, subIndex, forward]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-white to-blue-100">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Welcome to LMS
        </h1>
        <p className="text-xl md:text-2xl text-blue-700 h-10 font-medium tracking-wide">
          {text}<span className="animate-blink">|</span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-xl transition duration-300"
          >
            Get Started
          </a>
          <a
            href="/courses"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Browse Courses
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-blue-50 text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">
            Why Choose Our LMS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Interactive Courses
              </h3>
              <p className="text-gray-600">
                Engaging content with quizzes, videos, and real-world projects.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Admin Dashboard
              </h3>
              <p className="text-gray-600">
                Manage courses, users, and analytics with a powerful admin panel.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Track learning progress and certifications through your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="py-16 px-6 bg-blue-100 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700">
                Full Stack Development
              </h3>
              <p className="mt-2 text-gray-600">
                Master React, Node, MongoDB, and more.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700">
                Data Structures & Algorithms
              </h3>
              <p className="mt-2 text-gray-600">
                Crack coding interviews with in-depth DSA training.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700">
                Cloud & DevOps
              </h3>
              <p className="mt-2 text-gray-600">
                Learn AWS, Docker, Kubernetes, and CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
            Ready to start your learning journey?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of learners who trust our platform to skill up.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Join Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
