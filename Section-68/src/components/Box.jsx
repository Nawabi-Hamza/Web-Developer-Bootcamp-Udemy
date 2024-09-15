import React, { useState } from 'react'
import "./Box.css"
function Box({ isActive ,toggle }) {
  return (
    <div className='Box' onClick={toggle} style={{backgroundColor:isActive ? "red":"black"}} ></div>
  )
}

export default Box