import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import sign from '../assets/sign.png';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(true);
  const { user, setUser } = useAuth();

  const API_URL = import.meta.env.VITE_API_URL || "https://server-production-2084.up.railway.app";

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, formData);
      toast.success('Signup successful!');

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.msg || err.response?.data?.message || 'Signup failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, formData);
      toast.success('Login successful!');

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.msg || err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-screen px-4 sm:px-8">
        {/* Left Image */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-transparent text-white">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            src={sign}
            className="object-contain max-w-xl"
            alt="Signup illustration"
          />
        </div>

        {/* Right Flip Card */}
        <div className="perspective flex justify-center items-center py-8">
          <motion.div
            className="relative w-full max-w-md min-h-[500px] flex flex-col justify-center items-center"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
          >

            {/* Login Form */}
            <motion.form
              onSubmit={handleLogin}
              className="absolute backface-hidden rotate-y-180 bg-white dark:bg-transparent p-6 rounded shadow w-full"
            >
              <h1 className="font-bold text-3xl mb-6 text-center dark:text-white">Login</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              />

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                >
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => setFlipped(false)}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 dark:bg-blue-300 dark:text-black"
                >
                  Don't have an account? Signup
                </button>
              </div>
            </motion.form>
            
            {/* Signup Form */}
            <motion.form
              onSubmit={handleSignup}
              className="absolute backface-hidden bg-white dark:bg-transparent p-6 rounded shadow w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="font-bold text-3xl mb-6 text-center dark:text-white">Create Account</h1>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full mb-3 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full mb-3 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              />
              <select
                name="role"
                className="w-full mb-4 p-2 border rounded-3xl"
                onChange={handleChange}
                required
              >
                <option value="">Select role</option>
                <option value="learner">Learner</option>
                {/* <option value="instructor">Instructor</option> */}
              </select>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                >
                  Signup
                </button>

                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 dark:bg-blue-300 dark:text-black"
                >
                  Already have an account? Login
                </button>
              </div>
            </motion.form>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Signup;
