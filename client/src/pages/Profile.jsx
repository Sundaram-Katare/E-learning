import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <motion.div
        className="border border-black dark:border-white rounded-xl p-6 mx-4 mt-6 text-center shadow-md bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold dark:text-white">Profile</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className="border border-black dark:border-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md bg-white dark:bg-gray-900"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png"
            alt={`${user?.firstName} ${user?.lastName}`}
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover bg-purple-500 rounded-full border-4 sm:border-8 border-gray-400 mb-4"
          />
          <h2 className="text-lg sm:text-xl font-bold dark:text-white">
            {user?.firstName} {user?.lastName}
          </h2>
        </motion.div>

        {/* User Details Card */}
        <motion.div
          className="border border-black dark:border-white rounded-xl p-6 shadow-md bg-white dark:bg-gray-900"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col gap-4">
            <p className="dark:text-white font-bold text-lg sm:text-xl">
              Email:{" "}
              <span className="font-light break-all">{user?.email}</span>
            </p>
            <hr className="border-gray-400 dark:border-gray-600" />
            <p className="dark:text-white font-bold text-lg sm:text-xl">
              Role: <span className="font-light capitalize">{user?.role}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Profile;
