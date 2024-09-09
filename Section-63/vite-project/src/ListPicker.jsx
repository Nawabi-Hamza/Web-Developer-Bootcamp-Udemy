import React from 'react'

function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length)
    const randomElement = values[randIdx]
  return (
    <div>
        <p>The list of values : {values}</p>
        <p>Random Element: {randomElement}</p>
    </div>
  )
}

export default ListPicker