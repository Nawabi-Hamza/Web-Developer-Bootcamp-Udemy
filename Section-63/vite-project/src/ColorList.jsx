

import React from 'react'

function ColorList({ colors }) {
  return (
    <div>
        <h2>Color List</h2>
        <ul>
            {colors.map( item=>(
                <li key={item} style={{color:item}}>{item}</li>
            ))}
        </ul>
    </div>
  )
}


export default ColorList