import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminCreateCourse = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    price: 0,
    content: [{ title: "", videoUrl: "", duration: "" }],
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedContent = [...courseData.content];
    updatedContent[index][e.target.name] = e.target.value;
    setCourseData({ ...courseData, content: updatedContent });
  };

  const addContentField = () => {
    setCourseData({
      ...courseData,
      content: [...courseData.content, { title: "", videoUrl: "", duration: "" }],
    });
  };

  const removeContentField = (index: number) => {
    const updatedContent = courseData.content.filter((_, i) => i !== index);
    setCourseData({ ...courseData, content: updatedContent });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const payload = {
        ...courseData,
        createdBy: user?._id,
      };
      const response = await axios.post("http://localhost:5000/api/courses", payload);
      setMessage("Course created successfully!");
      navigate("/dashboard");
    } catch (err: any) {
      setMessage("Failed to create course.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white py-10 px-6">
      <div className="max-w-3xl mx-auto bg-blue-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-neon-blue">Create New Course</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              name="title"
              value={courseData.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl text-black"
              placeholder="Course title"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={courseData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-xl text-black"
              rows={4}
              placeholder="Course description"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Thumbnail URL</label>
            <input
              name="thumbnail"
              value={courseData.thumbnail}
              onChange={handleChange}
              className="w-full p-3 rounded-xl text-black"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Price (₹)</label>
            <input
              name="price"
              type="number"
              value={courseData.price}
              onChange={handleChange}
              className="w-full p-3 rounded-xl text-black"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-blue">Course Content</h3>
            {courseData.content.map((content, index) => (
              <div key={index} className="bg-blue-800 p-4 rounded-xl space-y-2">
                <input
                  type="text"
                  name="title"
                  value={content.title}
                  onChange={(e) => handleContentChange(index, e)}
                  placeholder="Video title"
                  className="w-full p-2 rounded text-black"
                />
                <input
                  type="text"
                  name="videoUrl"
                  value={content.videoUrl}
                  onChange={(e) => handleContentChange(index, e)}
                  placeholder="Video URL"
                  className="w-full p-2 rounded text-black"
                />
                <input
                  type="text"
                  name="duration"
                  value={content.duration}
                  onChange={(e) => handleContentChange(index, e)}
                  placeholder="Duration (e.g., 10min)"
                  className="w-full p-2 rounded text-black"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeContentField(index)}
                    className="text-red-400 hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addContentField}
              className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              + Add Video
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 py-3 rounded-xl hover:bg-green-600 text-white font-semibold"
          >
            Create Course
          </button>

          {message && (
            <p className="text-center mt-4 text-yellow-300 font-medium">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminCreateCourse;
