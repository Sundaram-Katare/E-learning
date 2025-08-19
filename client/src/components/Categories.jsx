import CategoryCard from './CategoryCard';
import { FaFilePdf } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Categories() {
    return (
        <motion.div 
            className="min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-4 p-4"
        >
            <CategoryCard color="bg-orange-500" icon={<FaFilePdf />} text="PDF" route={"/courses"}/>
            <CategoryCard color="bg-blue-500" icon={<FaVideo />} text="Video" route={"/videos"}/>
        </motion.div>
    );
}
