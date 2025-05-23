import React from 'react'
import Card from "./Card"
import list from "../../public/list.json"
import { Link } from 'react-router-dom';
// import Login from '../Component/Login'






const Course = () => {
  return (

      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justyfy-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className="text-pink-500">Herae!:</span></h1>
        <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, 
        et totam. Tempora amet atque expedita,
         quae corrupti totam sed pariatur corporis 
         at veniam est voluptas animi!
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur 
          corporis at veniam est voluptas animi!</p>
     
<Link to="/">
<button className='mt-6 bg-pink-500 text-white px-2 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
</Link>
</div>

<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
  
  {
   list.map((item)=>(
    
    <Card key={item.id} item={item}/>


   ))
  }
  

</div>

      </div>
    
  )
}

export default Course