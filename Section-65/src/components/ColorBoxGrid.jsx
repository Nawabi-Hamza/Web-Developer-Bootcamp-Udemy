import React from 'react'
import ColorBox from './ColorBox'
import "./ColorBox.css"
function ColorBoxGrid({ colors }) {
    const boxes = []

    for(let i=0 ; i<25 ; i++){
        boxes.push(<ColorBox key={i} colors={colors} />)
    }

  return (
    <div className='ColorBoxGrid'>
        {boxes}
    </div>
  )
}

export default ColorBoxGrid