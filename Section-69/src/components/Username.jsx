

import React, { useState } from 'react'

function UsernameForm() {
    const [ username,setUsername ] = useState("timy")
    const updateUsername = (evt)=>{
        console.log(evt.target);
        setUsername(evt.target.value)
    }
  return (
    <div>
        <h5>{username}</h5>
        <label htmlFor="username">Username</label>
        <input type="text"
            placeholder="Username"
            value={username}
            onChange={updateUsername}
            id='username'
        />
        <button>Click</button>
    </div>
  )
}

export default UsernameForm