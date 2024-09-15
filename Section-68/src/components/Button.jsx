import React from 'react'
// import { Link } from 'gatsby'
import "./Button.css"

export default function Button({ clickFunc,disabled=false,label="Click me" }) {
  return <button className='Button' onClick={clickFunc} disabled={disabled}>{label}</button>
  
}

