import { motion } from "framer-motion";

const Card = ({ title, description, icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 25px rgba(242, 120, 13, 0.6)" 
            }}
            className="text-center flex flex-col justify-center items-center bg-transparent p-6 rounded-lg shadow-sm shadow-yellow-400 transition duration-300"
        >
            <div className="text-orange-500 dark:text-orange-400 text-5xl sm:text-6xl mb-3">
                {icon}
            </div>
            <h3 className="text-orange-500 dark:text-orange-400 text-lg sm:text-xl font-semibold">
                {title}
            </h3>
            <p className="dark:text-gray-200 text-sm sm:text-base mt-4 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default Card;
