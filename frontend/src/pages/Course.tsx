
import CourseCard from "../components/CourseCard";

const mockCourses = [
  {
    title: "Full Stack Development",
    description: "Master React, Node.js, MongoDB, and build real-world apps.",
    thumbnail: "/images/fullstack.jpg",
    price: 1999,
    content: [
      { title: "Intro", videoUrl: "video1.mp4", duration: "5:00" },
      { title: "React Basics", videoUrl: "video2.mp4", duration: "10:00" },
    ],
    createdBy: "adminId1",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Crack interviews with hands-on DSA in Java and C++.",
    thumbnail: "/images/dsa.jpg",
    price: 999,
    content: [
      { title: "Arrays", videoUrl: "video3.mp4", duration: "15:00" },
      { title: "Recursion", videoUrl: "video4.mp4", duration: "12:00" },
    ],
    createdBy: "adminId2",
  },
  {
    title: "Cloud & DevOps",
    description: "Learn AWS, Docker, CI/CD pipelines, and become DevOps-ready.",
    thumbnail: "/images/devops.jpg",
    price: 1499,
    content: [
      { title: "AWS Basics", videoUrl: "video5.mp4", duration: "8:00" },
      { title: "Docker", videoUrl: "video6.mp4", duration: "10:00" },
    ],
    createdBy: "adminId3",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Explore Our Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
