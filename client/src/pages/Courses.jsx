import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import AddCourse from "../components/AddCourse";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/courses");
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4 sm:p-8 lg:p-12 xl:p-16 dark:bg-transparent dark:text-white max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:text-white">
          Available Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {courses.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No courses available.</p>
          ) : (
            courses.map((course, idx) => (
              <motion.div
                key={course._id || idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <CourseCard
                  id={course._id}
                  title={course.title}
                  image={course.thumbnail}
                  duration={course.duration}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
      <AddCourse />
      <Footer />
    </>
  );
};

export default Courses;
