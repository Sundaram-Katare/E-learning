import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';

const TestiCard = ({ name, course, feedback, image, rating }) => {
  return (
    <>
      <motion.div
        className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
      >
        <div className="flex flex-col space-y-4">
          {/* Header with avatar and info */}
          <div className="flex items-start space-x-4">
            <Avatar
              alt={name}
              src={image}
              className="w-12 h-12 rounded-full border-2 border-orange-400 dark:border-orange-500"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{course}</p>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${star <= rating ? 'text-orange-500' : 'text-gray-300 dark:text-gray-500'}`}
                  >
                    {star <= rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback text */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {feedback}
          </p>

          {/* Course tag */}
          <div className="inline-block self-start px-3 py-1 bg-orange-100 dark:bg-gray-700 rounded-full">
            <span className="text-xs font-medium text-orange-800 dark:text-orange-300">
              {course}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  )
};

export default TestiCard;