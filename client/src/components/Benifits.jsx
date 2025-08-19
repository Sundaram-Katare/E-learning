import Card from "./Card";
import { ImBooks } from "react-icons/im";
import { IoIosCloudDownload } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbAccessPoint } from "react-icons/tb";


const benifits = [
  {
    icon: <IoIosCloudDownload size={70} />,
    title: "Cloud-Powered Storage",
    description:
      "All documents are stored safely on Cloudinary, ensuring high availability.",
  },
  {
    icon: <ImBooks size={70} />,
    title: "Free & Open Knowledge Sharing",
    description:
      "Learn from a wide range of user-uploaded docs without hidden paywalls.",
  },
  {
    icon: <FaEarthAmericas size={70} />,
    title: "Community Driven",
    description:
      "Anyone can upload study material, making Learnzo a collaborative learning hub.",
  },
  {
    icon: <TbAccessPoint size={70} />,
    title: "Easy Access Anywhere",
    description:
      "Access docs anytime, anywhere – no need for downloads.",
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
