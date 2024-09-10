

import React from 'react'

function PropertyListItem({ name,price,rating }) {
  return (
    <div className='Property'>
        <h2>{name}</h2>
        <h3>${price} at night</h3>
        <h4>{rating}⭐</h4>
    </div>
  )
}

export default PropertyListItem