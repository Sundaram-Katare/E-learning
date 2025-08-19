import Benifits from "../components/Benifits";
import HeroCompo from "../components/HeroCompo";
import Navbar from "../components/Navbar";
// import Courses from "../components/Courses";
import AddCourse from "../components/AddCourse";
// import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroCompo />
      {/* <Courses /> */}
      <Benifits />
      <AddCourse />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default Home;
