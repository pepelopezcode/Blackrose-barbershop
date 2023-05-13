import React from 'react'

import { StorefrontImage } from './Images'


function Products() {

  const prod = [{
    productImage: StorefrontImage,
    name: "test product",
    price: '$100',
    description: 'isfdjkngijsnadg',
  },
  {
    productImage: StorefrontImage,
    name: "test product",
    price: '$100',
    description: 'isfdjkngijsnadg',
  },
  {
    productImage: StorefrontImage,
    name: "test product",
    price: '$100',
    description: 'isfdjkngijsnadg',
  },
  {
    productImage: StorefrontImage,
    name: "test product",
    price: '$100',
    description: 'isfdjkngijsnadg',
  },
  {
    productImage: StorefrontImage,
    name: "test product",
    price: '$100',
    description: 'isfdjkngijsnadg',
  },
  {
    productImage: StorefrontImage,
    name: "test product",
    price: '$19900',
    description: 'isfdjkngijsnadg',
  },
  
]

  return (
    <div>
      <h1 className=' text-4xl text-center  ' >Products</h1>
      <div className='grid grid-cols-4 justify-items-center m-3' >
        {prod.map((item , index) => 
         {return (
          <div key={index} className='border rounded border-slate-900 p-4 m-4' >
          <img src={item.productImage} alt={index} className='h-64 ' />
          <p> {item.name} </p>
          <p> {item.description} </p>
          <div className=' flex justify-between items-center ' > 
            <button className='border rounded-full py-1 px-2 border-slate-800 cursor-pointer' >Add to cart</button>
            <p> {item.price} </p>
          </div>
          
          
        </div>
         )
          
        })}
        
      </div>
      
    </div>
  )
}

export default Products