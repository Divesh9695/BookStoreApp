import React from 'react'


const Card = ({item}) => {
  return (
  
    <div> 
    <div className="card m-3 bg-base-100 p-10 shadow-xl hover:scale-105 duration-400">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Story Book
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">${item.prise}</div>
      <div className="cursor-pointer rounded-full border-[2px]badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  
  )
}

export default Card