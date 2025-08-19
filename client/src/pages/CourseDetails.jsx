import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const { data } = await axios.get(
          `http://localhost:3000/api/courses/${id}`
        );
        setCourse(data.course);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress size={60} color="error" />
      </div>
    );
  }

  if (!course) return <p className="text-center mt-10">Course not found.</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4 sm:p-6 dark:bg-transparent dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6"
        >
          {/* Thumbnail */}
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-52 sm:h-72 object-cover rounded-xl mb-6"
          />

          {/* Title & Domain */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            {course.title}
          </h1>
          <div className="inline-block self-start px-3 py-1 bg-orange-100 dark:bg-gray-700 rounded-full mb-4">
            <span className="text-xs font-medium text-orange-800 dark:text-orange-300">
              {course.domain}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 mt-2 text-sm sm:text-base">
            <span className="font-bold text-lg sm:text-xl mb-2 block">
              Description
            </span>
            {course.description}
          </p>

          {/* Extra Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <p className="bg-green-300 p-2 rounded-xl dark:text-black">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="bg-purple-300 p-2 rounded-xl dark:text-black">
              <strong>Price (INR):</strong> {/*{course.price?.inr}*/} Free
            </p>

            <p><strong>Added By:</strong> {course.addedBy}</p>
          </div>

          {/* PDFs Section */}
          {course.pdfs && course.pdfs.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3">Course PDFs</h2>
              <ul className="list-disc pl-5 space-y-2">
                {course.pdfs.map((pdf, idx) => (
                  <li key={idx}>
                    <a
                      href={`https://docs.google.com/gview?url=${pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Open PDF
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Videos Section */}
          {course.videos && course.videos.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Course Videos
              </h2>
              <div className="space-y-4">
                {course.videos.map((video, idx) => (
                  <div key={idx} className="relative w-full pt-[56.25%]">
                    <iframe
                      src={video}
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                      title={`Course video ${idx}`}
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default CourseDetails;
