import React from "react";

const features = [
  {
    title: "Track Progress",
    desc: "Monitor your learning journey with detailed analytics and reports.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-7 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Interactive Courses",
    desc: "Engage with multimedia lessons and quizzes for effective learning.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z"/>
        <path d="M12 12V4"/>
      </svg>
    ),
  },
  {
    title: "Community Support",
    desc: "Join a vibrant community of learners and get help anytime.",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a4 4 0 00-3-3.87"/>
        <path d="M9 20H4v-2a4 4 0 013-3.87"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Amit S.",
    text: "LMS made my learning so much easier! The interface is beautiful and intuitive.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya K.",
    text: "I love the progress tracking and the community support. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 text-center drop-shadow-lg">
          Unlock Your Learning Potential
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
          Discover a modern Learning Management System designed to empower students and educators. Interactive courses, progress tracking, and a supportive community—all in one place.
        </p>
        <a
          href="/signup"
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-lg font-semibold"
        >
          Get Started Free
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Features</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {features.map((f, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 transition">
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold text-blue-700">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-300">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 shadow" />
              <p className="text-gray-700 italic mb-2">"{t.text}"</p>
              <span className="font-semibold text-blue-700">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 flex flex-col items-center bg-blue-700">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start learning?</h2>
        <a
          href="/signup"
          className="px-8 py-4 bg-white text-blue-700 rounded-full shadow-lg hover:bg-blue-100 transition text-lg font-semibold"
        >
          Join Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 bg-blue-50">
        © {new Date().getFullYear()} LMS. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;