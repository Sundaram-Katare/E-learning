import CustomButton from "./Button";
import headImg from "../assets/head.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HeroCompo = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) =>
                prevCount < 30 ? prevCount + 1 : 30
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-40 p-4 sm:p-8 m-4">
                    
                    <motion.div className="flex flex-col justify-center gap-4 min-h-[300px] md:min-h-[400px] text-center md:text-left"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}  
                    >
                        <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                            <span className="block mb-2">Share Docs</span>
                            <span className="block mt-2 mb-2">and Spread</span>
                            <span className="block text-orange-500 dark:text-orange-400">Knowledge</span>
                        </div>

                        <p className="mt-4 text-sm sm:text-base dark:text-gray-300 font-light font-roboto">
                            Learnzo have been developed to be a vehicle
                            <br className="hidden sm:block" />
                            of delivering knowledge and skills to learners worldwide.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mt-6 sm:mt-4 justify-items-center md:justify-items-start">
                            <CustomButton text="Start" route={user ? "courses": "signup"} />

                            {/* <div className="dark:text-white">
                                <h2 className="font-semibold text-3xl sm:text-4xl">{count}+</h2>
                                <p className="font-light">Career Courses</p>
                            </div> */}
                        </div>
                    </motion.div>

                    <motion.div className="flex justify-center items-center max-h-[400px] md:max-h-[600px] mt-6 md:mt-0"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                    >
                        <img
                            src={headImg}
                            alt="Hero"
                            className="object-cover max-h-full w-full sm:w-[80%] md:max-h-full  rounded-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default HeroCompo;
