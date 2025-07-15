import { useEffect , useState } from "react";

const [courses, setCourses] = useState([]);

useEffect ( () => {
  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/course");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCourses(data.courses);
      
    } catch (error) {
      console.error("Error fetching courses:", error);
      
    }
  }
})
const Courses = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Explore Our Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
  
        </div>
      </div>
    </div>
  );
};

export default Courses;
