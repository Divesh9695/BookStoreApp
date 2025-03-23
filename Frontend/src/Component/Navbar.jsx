
import React, { useEffect, useState } from 'react';
import { FaSun , FaMoon } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => { 
  const[theme,setTheme]=useState('dark')
  const element=document.documentElement;
  const handletheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
  
      document.documentElement.setAttribute("data-theme", newTheme); 
      localStorage.setItem("theme", newTheme);
  
      console.log(newTheme + " theme applied"); 
      return newTheme;
    });
  };
  
  // Load the saved theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; 
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);
  
  
  


  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50'>
         <div className="navbar bg-base-100 shadow-s justify-between">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/course'>Course</Link></li>
        <li><a>Contact</a></li>
       <li><a>About</a></li>
      </ul>
    </div>
    <a className="font-bold text-base-content text-xl ">Book Store</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-5">
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/Course'>Course</Link></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li> 
    </ul>
  </div>
  <div className='hidden md:block'>
  <label className="input outline-none">
  <input type="search" className="grow outline-none" placeholder="Search" />
  <svg className="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
  <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
 
</label>

</div>

<div onClick={()=>handletheme()}>
<label className="swap swap-rotate px-3"    >
  {/* this hidden checkbox controls the state */}
{theme!=='dark'?(<FaSun className='text-2xl' />):( <FaMoon className='text-2xl'/>)}
  {/* sun icon */}
  

  {/* moon icon */}
 
</label>
</div>

  <div className="">
    <Link
        className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
        onClick={() => document.getElementById("my_modal_3")?.showModal()}
      >
        Login
      </Link>    
  </div>
</div>
    </div>
  )
}

export default Navbar

