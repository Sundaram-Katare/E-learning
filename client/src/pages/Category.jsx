import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { CiCircleChevDown } from "react-icons/ci";
import Categories from '../components/Categories.jsx';
import Footer from '../components/Footer.jsx';

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  }
];

const Category = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((prevQuote) => {
        const nextIndex = (quotes.indexOf(prevQuote) + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {/* Quote Section */}
        <motion.div className='bg-gray-100 min-h-[60vh] md:min-h-screen rounded-3xl flex flex-col justify-center items-center p-4 sm:p-8 dark:bg-transparent'>
          <motion.div
            className='flex flex-col items-center justify-center p-4 sm:p-8 text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p className='text-gray-800 dark:text-white text-lg sm:text-2xl italic leading-relaxed px-2 sm:px-6'>
              " {quote.text} "
            </motion.p>
            <motion.p className='text-gray-600 dark:text-white text-sm sm:text-md mt-2'>
              - {quote.author}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Explore Categories Section */}
        <motion.div className='min-h-[60vh] md:min-h-screen text-black dark:text-white font-extrabold text-4xl sm:text-6xl lg:text-9xl text-center flex flex-col justify-center items-center px-4'>
          <motion.h1
            className='flex flex-col'
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.1 }}
          >
            Explore Our
          </motion.h1>
          <motion.h1
            className='text-orange-500'
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.1 }}
          >
            Categories
          </motion.h1>
          <CiCircleChevDown className='self-center text-center text-2xl sm:text-3xl mt-16 sm:mt-24 lg:mt-40' />
        </motion.div>
      </div>

      <Categories />
      <Footer />
    </>
  );
};

export default Category;
