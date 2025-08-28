  

import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React and build interactive UIs.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    price: 499,
    content: [
      { title: "Introduction", videoUrl: "", duration: "10m" },
      { title: "Components", videoUrl: "", duration: "20m" },
    ],
    createdBy: "admin1",
    createdAt: new Date(),
  },
  {
    title: "Node.js Essentials",
    description: "Master backend development with Node.js.",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    price: 599,
    content: [
      { title: "Getting Started", videoUrl: "", duration: "15m" },
      { title: "Express.js", videoUrl: "", duration: "25m" },
    ],
    createdBy: "admin2",
    createdAt: new Date(),
  },
  {
    title: "Python Programming",
    description: "A complete guide to Python for all levels.",
    thumbnail: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 399,
    content: [
      { title: "Basics", videoUrl: "", duration: "12m" },
      { title: "Advanced Topics", videoUrl: "", duration: "30m" },
    ],
    createdBy: "admin3",
    createdAt: new Date(),
  },
  {
    title: "Data Structures & Algorithms",
    description: "Crack coding interviews with DSA mastery.",
    thumbnail: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    price: 699,
    content: [
      { title: "Arrays", videoUrl: "", duration: "18m" },
      { title: "Trees", videoUrl: "", duration: "22m" },
    ],
    createdBy: "admin4",
    createdAt: new Date(),
  },
  {
    title: "Web Development Bootcamp",
    description: "Become a full-stack web developer.",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: 799,
    content: [
      { title: "HTML & CSS", videoUrl: "", duration: "20m" },
      { title: "JavaScript", videoUrl: "", duration: "25m" },
    ],
    createdBy: "admin5",
    createdAt: new Date(),
  },
  {
    title: "Machine Learning Basics",
    description: "Start your journey in ML and AI.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    price: 899,
    content: [
      { title: "Introduction", videoUrl: "", duration: "15m" },
      { title: "Regression", videoUrl: "", duration: "30m" },
    ],
    createdBy: "admin6",
    createdAt: new Date(),
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Design beautiful and user-friendly interfaces.",
    thumbnail: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80",
    price: 499,
    content: [
      { title: "Principles", videoUrl: "", duration: "10m" },
      { title: "Tools", videoUrl: "", duration: "20m" },
    ],
    createdBy: "admin7",
    createdAt: new Date(),
  },
  {
    title: "DevOps & Cloud",
    description: "Learn DevOps practices and cloud deployment.",
    thumbnail: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b4?auto=format&fit=crop&w=400&q=80",
    price: 999,
    content: [
      { title: "CI/CD", videoUrl: "", duration: "18m" },
      { title: "AWS Basics", videoUrl: "", duration: "22m" },
    ],
    createdBy: "admin8",
    createdAt: new Date(),
  },
  {
    title: "Cybersecurity Essentials",
    description: "Protect systems and data from cyber threats.",
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    price: 599,
    content: [
      { title: "Threats", videoUrl: "", duration: "15m" },
      { title: "Defenses", videoUrl: "", duration: "25m" },
    ],
    createdBy: "admin9",
    createdAt: new Date(),
  },
  {
    title: "Mobile App Development",
    description: "Build apps for Android and iOS.",
    thumbnail: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    price: 799,
    content: [
      { title: "Android", videoUrl: "", duration: "20m" },
      { title: "iOS", videoUrl: "", duration: "25m" },
    ],
    createdBy: "admin10",
    createdAt: new Date(),
  },
  {
    title: "Database Management",
    description: "Learn SQL and NoSQL databases.",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: 499,
    content: [
      { title: "SQL", videoUrl: "", duration: "15m" },
      { title: "NoSQL", videoUrl: "", duration: "20m" },
    ],
    createdBy: "admin11",
    createdAt: new Date(),
  },
  {
    title: "Artificial Intelligence",
    description: "Explore AI concepts and applications.",
    thumbnail: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 999,
    content: [
      { title: "AI Basics", videoUrl: "", duration: "18m" },
      { title: "Applications", videoUrl: "", duration: "22m" },
    ],
    createdBy: "admin12",
    createdAt: new Date(),
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-blue-700 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
              <div className="mb-4">
                <span className="text-blue-800 font-semibold text-lg">₹{course.price}</span>
              </div>
              <button
                onClick={() => navigate("/buy")}
                className="w-full py-2 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800 transition"
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;