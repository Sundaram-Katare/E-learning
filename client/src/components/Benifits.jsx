import Card from "./Card";
import { ImBooks } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { BsPersonRaisedHand } from "react-icons/bs";

const benifits = [
  {
    icon: <ImBooks size={70} />,
    title: "Quality Education",
    description:
      "Our platform delivers high-quality education through expertly designed courses that combine theoretical knowledge with practical application. We ensure every learner gains a deep understanding of the subject matter.",
  },
  {
    icon: <GiMoneyStack size={70} />,
    title: "Affordable Prices",
    description:
      "We believe education should be accessible to everyone. That’s why our courses are priced affordably, offering exceptional value without compromising on quality or depth.",
  },
  {
    icon: <BsPersonRaisedHand size={70} />,
    title: "Expert Instructors",
    description:
      "Learn from seasoned professionals and industry leaders who bring real-world experience into the classroom. Our instructors are passionate about teaching and committed to your success.",
  },
  {
    icon: <ImBooks size={70} />,
    title: "Learn at Your Pace",
    description:
      "Our flexible course structure allows you to learn whenever and wherever it suits you. Whether you're a full-time student or a working professional, you can progress at your own speed.",
  },
];

const Benifits = () => {
  return (
    <>
      <div className="p-4 sm:p-8 m-4 min-h-screen">
        <h2 className="text-3xl sm:text-4xl mb-12 sm:mb-16 font-semibold dark:text-white text-center">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benifits.map((benefit, index) => (
            <Card
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={index * 0.2} 
            />
          ))}
        </div>

        <p className="mt-20 sm:mt-28 text-xl sm:text-2xl lg:text-3xl text-center dark:text-white italic">
          Join us today and take the first step towards a brighter future!
        </p>
      </div>
    </>
  );
};

export default Benifits;
