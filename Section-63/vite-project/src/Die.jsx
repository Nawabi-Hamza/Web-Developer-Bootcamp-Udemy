import React from 'react'

function Die({ numSides=6 }) {
    const roll = Math.floor(Math.random() * numSides) + 1
  return (
    <>
        <h3>{numSides}-sided die rolls: {roll}</h3>
    </>
  )
}

export default Die