import React from 'react'
import "./Die.css"
function Die({ val,color="slateblue" }) {
  // /src/assets/dice/dice%201.png
  return (
    // <div className='Die' style={{backgroundColor:color}}>{val}
      <img src={`/src/assets/dice/dice ${val}.png`} className='die-img' alt={val} />
    // </div>
  )
}

export default Die