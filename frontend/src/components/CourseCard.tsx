import React from "react";

interface CourseCardProps {
  title: string;
  description?: string;
  thumbnail?: string;
  price: number;
  content: {
    title?: string;
    videoUrl?: string;
    duration?: string;
  }[];
  createdBy: string;
}


const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  thumbnail,
  price,
  content,
  
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-blue-100">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-blue-700">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">
            {content?.length || 0} Lessons
          </span>
          <span className="text-sm font-semibold text-blue-600">
            ₹{price === 0 ? "Free" : price}
          </span>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
