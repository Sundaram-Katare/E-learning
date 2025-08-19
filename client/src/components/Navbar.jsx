import CustomButton from "./Button";
import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import logo from "/logo.png"
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("theme") !== "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (lightMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  return (
    <nav className="flex justify-between items-center p-4 py-6 bg-transparent dark:text-white relative">
      
      <div>
        <img
          src={logo}
          className="w-24 cursor-pointer"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between items-center space-x-10 text-lg font-light">
        <h2 className="hover:text-orange-500 cursor-pointer" onClick={() => navigate("/")}>Home</h2>
        <h2 className="hover:text-orange-500 cursor-pointer" onClick={() => navigate("/category")}>Category</h2>
        <h2 className="hover:text-orange-500 cursor-pointer" onClick={() => navigate("/courses")}>Courses</h2>
        <h2 onClick={() => setLightMode(!lightMode)} className="cursor-pointer">
          <CiLight className={`transition duration-300 ${lightMode ? "text-black" : "text-yellow-400"}`} size={35} />
        </h2>
        {user ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                logout();
                toast.success("Logged out successfully");
                navigate('/');
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Logout
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="bg-black hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Profile
            </button>
          </div>
        ) : (
          <CustomButton text="Sign Up" route="signup" />
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center space-y-6 w-[70%] sm:w-[50%] md:hidden z-50">
          <h2 className="hover:text-orange-500 cursor-pointer" onClick={() => { navigate("/"); setMenuOpen(false) }}>Home</h2>
          <h2 className="hover:text-orange-500 cursor-pointer" onClick={() => { navigate("/category"); setMenuOpen(false) }}>Category</h2>
          <h2 className="hover:text-orange-500 cursor-pointer" onClick={() => { navigate("/courses"); setMenuOpen(false) }}>Courses</h2>
          <h2 onClick={() => setLightMode(!lightMode)} className="cursor-pointer">
            <CiLight className={`transition duration-300 ${lightMode ? "text-black" : "text-yellow-400"}`} size={35} />
          </h2>
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <CustomButton text="Sign Up" route="signup" />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
