import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaReddit } from "react-icons/fa6";
import logo from "/logo.png";

const Footer = () => {
  return (
    <>
      <motion.div className="m-1 p-8 bg-gray-100 dark:bg-transparent rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center p-1">
          <div className="flex flex-col items-center space-x-5 md:flex-row md:justify-center">
            <img
              src={logo}
              alt=""
              className="object-cover max-h-16 rounded-2xl"
            />
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white">
              Learnzo
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            Learnzo is your gateway to a world of knowledge and skills. Explore
            our diverse range of courses designed to empower learners globally.
            We empower educators and learners with innovative e-learning
            solutions. Our platform offers a wide range of courses, from career
            development to personal growth, all designed to help you succeed in
            your learning journey.
          </p>

          <div className="flex flex-wrap gap-6 mt-8 text-3xl md:text-5xl dark:text-white">
            <a
              onClick={() => window.open("https://twitter.com/sundaramkatare", "_blank")}
              className="cursor-pointer hover:text-yellow-400"
            >
              <FaSquareXTwitter />
            </a>
            <a
              onClick={() =>
                window.open("https://www.linkedin.com/company/sundaram-katare5", "_blank")
              }
              className="cursor-pointer hover:text-yellow-400"
            >
              <FaLinkedin />
            </a>
            <a
              onClick={() =>
                window.open("https://github.com/Sundaram-Katare", "_blank")
              }
              className="cursor-pointer hover:text-yellow-400"
            >
              <FaGithubSquare />
            </a>
            <a
              onClick={() =>
                window.open("https://www.reddit.com/r/Learnzo", "_blank")
              }
              className="cursor-pointer hover:text-yellow-400"
            >
              <FaReddit />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg md:text-xl font-semibold">Site Map</h3>
            <ul className="list-none space-y-4 text-sm md:text-base">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-lg md:text-xl font-semibold">Resources</h3>
            <ul className="list-none space-y-4 text-sm md:text-base">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">API Documentation</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
