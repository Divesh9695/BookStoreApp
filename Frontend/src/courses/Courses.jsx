import React from 'react'
import Navbar from '../Component/Navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer'
import Login from '../Component/Login'
import Contact from '../Component/Contact'


const courses = () => {
  return (
    <>
        <Navbar />
        <Login />
        <div className='min-h-screen'>
        <Course />
        </div>
        <Contact />
       
        <Footer />
    </>
  )
}

export default courses