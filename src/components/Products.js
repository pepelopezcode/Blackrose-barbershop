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
  
]

  return (
    <div>
      <p>Products</p>
      <div>
        {prod.map((item , index) => 
         {return (
          <div key={index} >
          <img src={item.productImage} alt={index}/>
          <p> {item.name} </p>
          <p> {item.price} </p>
          <p> {item.description} </p>
          <button>#</button>
        </div>
         )
          
        })}
        
      </div>
      
    </div>
  )
}

export default Products