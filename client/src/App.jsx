import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Category from './pages/Category';
import NewCourse from './pages/NewCourse';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import VideoCourses from './pages/VideoCourses';
import { AuthProvider } from './context/AuthContext';
import Profile from './pages/Profile';
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <>
      <AuthProvider>
      <div className='bg-white dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-black'>
        <div className='min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-black mx-6 md:mx-16'>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/category' element={<Category />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/add-course' element={<NewCourse />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              <Route path="/videos" element={<VideoCourses />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </div>
      </div>
      </AuthProvider>
      <Analytics />
    </>
  )
}

export default App
