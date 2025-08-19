import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import { IoMdTime } from "react-icons/io";
import { IoIosPaper } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ id, title, image, duration }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-xs bg-gradient-to-r from-white to-blue-300 text-black dark:bg-gradient-to-br from-[#EBA821] to-[#EDDD53] text-black rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate(`/courses/${id}`)}
      />

      <div className="p-4">
        {/* Time & Chapters */}
        <div className="flex items-center text-sm font-medium text-gray-800 space-x-4 mb-2">
          <span className="flex items-center">
            <IoMdTime className="mr-1 text-gray-700" /> {duration}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-1" onClick={() => console.log("Course clicked:", title)}>{title}</h3>

        {/* <Rating
          name="size-medium"
          value={rating}
          readOnly
          precision={0.1}
          sx={{ color: "#00a4e4ff" }}
        /> */}
      </div>
    </motion.div>
  );
};

export default CourseCard;
