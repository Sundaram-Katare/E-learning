import { motion } from "framer-motion";
import { CiBag1 } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import videoSource from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import CustomButton from "./Button";
import { SiGoogledocs } from "react-icons/si";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const AddCourse = () => {
    const navigate = useNavigate();
    return (
        <div className="p-6 md:p-10 lg:p-16 xl:p-20 m-4 min-h-screen rounded-lg max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 dark:text-white">
                

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex flex-col justify-center items-center gap-4"
                >
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-semibold dark:text-orange-400 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Add Your Own Docs
                    </motion.h1>
                    <motion.p
                        className="font-light text-center max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-2"
                        variants={fadeInUp}
                    >
                     Share your knowledge with learners worldwide -- on your terms.
                    </motion.p>
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-start mt-6 w-full">
                        
                                    
                        <motion.div
                            className="flex items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer w-full"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeInUp}
                        >
                            <FaPeopleGroup size={40} />
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-blue-500">Reach Learners</h2>
                                <p className="font-light">Connect with learners globally and share your knowledge.</p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            className="flex items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer w-full"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeInUp}
                        >
                            <GiTeacher size={40} />
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-blue-500">Create Impact</h2>
                                <p className="font-light">Inspire and educate the next generation of learners.</p>
                            </div>
                        </motion.div>
                    </div>
                    <CustomButton text="Add Docs" route="add-course" />
                </motion.div>
                
                <motion.div
                    className="flex justify-center items-center w-full max-h-72 md:max-h-96 lg:max-h-[32rem] overflow-hidden "
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SiGoogledocs size={480} className="dark:text-white"/>
                </motion.div>
            </div>
        </div>
    );
};
export default AddCourse;
