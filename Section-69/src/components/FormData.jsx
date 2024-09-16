import { useState } from "react"

function BetterFormData() {
    const [ formData,setFormData ] = useState({ firstname:"",lastname:"",password:"" })
    
    const formChange = (evt)=>{
        const { name,value } = evt.target
        setFormData({ ...formData, [name]:value })
    }

    const submitForm = ()=>{
        const { firstname,lastname,password } = formData
        console.log(firstname,lastname,password)
    }

  return (

    <div>
        <label htmlFor="firstname">Firstname: </label>
        <input type="text" placeholder='first name' value={formData.firstname} name="firstname" onChange={formChange}/><br />
        <label htmlFor="lastname">Lastname: </label>
        <input type="text" placeholder='last name' value={formData.lastname} name="lastname" onChange={formChange}/><br />
        <label htmlFor="password">Password: </label>
        <input type="password" minLength={4} placeholder='password' value={formData.password} name="password" onChange={formChange}/><br />
        <label htmlFor="file">file: </label>
        <input type="file" placeholder='file' name="file" onChange={()=>setFile(e.target)}/><br />
        
        <button onClick={submitForm}>Submit</button>
    </div>
  )
}

export default BetterFormData