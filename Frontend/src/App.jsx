import React from 'react'
import Home from "./home/Home";
import {Route,Routes } from 'react-router';
import Courses from './courses/courses';
import Login from './Component/Login';
import Signup from "./Component/Signup"


const App = () => {
  return (
  
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<><Home /><Login /> </>} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      </div>
    </>
  )
}

export default App

