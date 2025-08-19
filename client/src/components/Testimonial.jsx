import { motion } from 'framer-motion';
import TestiCard from './TestiCard';
import { useEffect, useState } from 'react';

const testimonials = [
    {
        name: "John Doe",
        course: "Web Development",
        feedback: "This course was fantastic! I learned so much about modern web technologies. The instructor was very knowledgeable and patient. The projects helped me build a strong portfolio.",
        image: "https://via.placeholder.com/150",
        rating: 5
    },
    {
        name: "Jane Smith",
        course: "Graphic Design",
        feedback: "I loved the hands-on approach of this course. The design principles were explained clearly with great examples. The feedback on my work was incredibly helpful. Would definitely recommend!",
        image: "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
        rating: 4
    },
    {
        name: "Alice Johnson",
        course: "Data Science",
        feedback: "The course content was very relevant and up-to-date. Covered everything from basics to advanced topics. The real-world datasets made learning practical. Best investment in my career!",
        image: "https://via.placeholder.com/150",
        rating: 5
    },
    {
        name: "Michael Brown",
        course: "Mobile App Development",
        feedback: "Excellent course for beginners and intermediates alike. The step-by-step tutorials were easy to follow. I published my first app after completing this. The community support was amazing.",
        image: "https://via.placeholder.com/150",
        rating: 5
    },
    {
        name: "Sarah Wilson",
        course: "Digital Marketing",
        feedback: "Comprehensive coverage of all digital marketing aspects. The case studies were particularly insightful. I implemented strategies at work with great results. Worth every penny!",
        image: "https://via.placeholder.com/150",
        rating: 4
    },
    {
        name: "David Thompson",
        course: "Cybersecurity",
        feedback: "This course transformed my understanding of security threats. The labs were challenging but rewarding. The instructor made complex topics accessible. Already signed up for the advanced course!",
        image: "https://via.placeholder.com/150",
        rating: 5
    }
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const batchSize = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => 
        (prev + batchSize) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(
    currentIndex, 
    currentIndex + batchSize
  );

    return (
        <>
            <motion.div className='p-8 m-4 min-h-screen rounded-2xl shadow-lg bg-gray-100 dark:bg-transparent'>
                <h2 className='text-4xl font-semibold text-center mb-10 dark:text-white'>Student Success Stories</h2>
                <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' animate={{ opacity: 1, scale: 1.0 }} initial={{ opacity: 0, scale: 2.8 }} exit={{ opacity: 0, scale: 0.8 }}>
                    {visibleTestimonials.map((testimonial, index) => (
                        <TestiCard
                            key={index}
                            name={testimonial.name}
                            course={testimonial.course}
                            feedback={testimonial.feedback}
                            image={testimonial.image}
                            rating={testimonial.rating}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
};

export default Testimonial;