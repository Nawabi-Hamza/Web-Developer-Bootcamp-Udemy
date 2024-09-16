

import React, { useState } from 'react'

function SingupForm() {
    const [ firstName,setFirstName ] = useState("timy")
    const [ lastName, setLastName ] = useState("joe")
    const updateFirstName = (evt)=>{
        setFirstName(evt.target.value)
    }
    const updateLastName = (evt)=>{
        setLastName(evt.target.value)
    }
    const handleSubmit = ()=>{
        console.log(firstName,lastName)
    }
  return (
    <div>
        <label htmlFor="firstName">FirstName</label>
        <input type="text"
            placeholder="firstName"
            value={firstName}
            onChange={updateFirstName}
            id='firstName'
        />
        <label htmlFor="LastName">Last Name</label>
        <input type="text"
            placeholder="LastName"
            value={lastName}
            onChange={updateLastName}
            id='LastName'
        />
        <button onClick={handleSubmit}>Click</button>
    </div>
  )
}

export default SingupForm