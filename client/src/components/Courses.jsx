// a courses data will come from backend API
import CustomButton from "./Button";
import CourseCard from "./CourseCard";

const courses = [
    {
        id: 1,
        title: "Understanding the Fundamentals of Data Science",
        description: "Description for Course 1",
        image: "https://ehuwt7zd2je.exactdn.com/wp-content/uploads/2023/12/data-science-course-benefits.jpg",
        chapters: 20,
        duration: "18 hours",
        rating: 4.5,
    },
    {
        id: 2,
        title: "Complete Digital Marketing Bundle for Business Mastery",
        description: "Description for Course 2",
        image: "https://st4.depositphotos.com/12640654/37847/i/450/depositphotos_378472198-stock-photo-adult-smiling-brunette-woman-doing.jpg",
        chapters: 15,
        duration: "12 hours",
        rating: 4,
    },
    {
        id: 3,
        title: "Mastering Python for Data Science",
        description: "Description for Course 3",
        image: "https://cdn.buttercms.com/t349DUJUReydclxkbGiA",
        chapters: 10,
        duration: "10 hours",
        rating: 4.8
    },
    {
        id: 4,
        title: "Custom Mobile App Development for iOS and Android",
        description: "Description for Course 4",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg",
        chapters: 25,
        duration: "20 hours",
        rating: 4.9
    },
    {
        id: 5,
        title: "Data Science and Machine Learning Bootcamp",
        description: "Description for Course 5",
        image: "https://st4.depositphotos.com/12640654/37847/i/450/depositphotos_378472198-stock-photo-adult-smiling-brunette-woman-doing.jpg",
        chapters: 30,
        duration: "25 hours",
        rating: 4.7
    },
    {
        id: 6,
        title: "Complete Web Development Bootcamp",
        description: "Description for Course 6",
        image: "https://st4.depositphotos.com/12640654/37847/i/450/depositphotos_378472198-stock-photo-adult-smiling-brunette-woman-doing.jpg",
        chapters: 35,
        duration: "30 hours",
        rating: 4.6
    }
];
const Courses = () => {
    return (
        <>
            <div className="p-6 sm:p-8 m-4 min-h-screen">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-semibold text-black dark:text-white">
                        Explore Our Courses
                    </h2>

                    <CustomButton text="Explore" route={"courses"}/>
                </div>
                <p className="mb-8 text-gray-600 font-light dark:text-white text-sm sm:text-base">
                    Discover a variety of courses tailored to your learning needs.
                </p>

                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                            chapters={course.chapters}
                            duration={course.duration}
                            rating={course.rating}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:hidden">
                    {courses.map((course) => course.id < 3 ? (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                            chapters={course.chapters}
                            duration={course.duration}
                            rating={course.rating}
                        />
                    ) : null)}
                </div>
            </div>
        </>
    );
};

export default Courses;
