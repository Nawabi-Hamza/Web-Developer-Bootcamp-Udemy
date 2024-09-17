import React from 'react'
import { useForm } from 'react-hook-form'


function HookFormShoppingListForm({ addItem }) {
    
    // const { register, handleSubmit, formState:{errors} } = useForm({ mode:"onChange" })
    const { register, handleSubmit, formState:{errors} } = useForm()
    
    const handleRegistration = (formData)=>{
        console.log("FROM FORM SUBMIT")
        console.log(formData)
        const { name,quantity } = formData
        addItem({product:name,quantity})
    }

    const handleError = (errors)=>{
        // console.log(errors)
    }

    const registerOptions = {
        name : { required:"Name cann't be blank"},
        quantity : { 
            required:"Quantity cann't be blank",
            min: { value:1,message:"Quantity must be greater than 0" },
            max: { value:10,message:"Quantity must be less than 10" }
        },
        email: { required: "invalid email field !"},
        password: { 
            required: "password is required",
            minLength: { value: 8, message: "password must be at least 8 characters" }
        }
    }

  return (
    <form onSubmit={handleSubmit(handleRegistration,handleError)}>

        <label>Name: 
            <input type="text" placeholder='name' {...register("name" , registerOptions.name)} />
            <p style={{color:"orangered"}}>{errors?.name && errors.name.message}</p>
        </label>
        <label>Email: 
            <input type="email" placeholder='email' {...register("email" , registerOptions.email)} />
            <p style={{color:"orangered"}}>{errors?.email && errors.email.message}</p>
        </label>
        <label>Password: 
            <input type="password" placeholder='password' {...register("password" , registerOptions.password)} />
            <p style={{color:"orangered"}}>{errors?.password && errors.password.message}</p>
        </label>
        <label htmlFor="qty">Quantity:
            <input type="number" placeholder='quantity' {...register("quantity",registerOptions.quantity)} />
            <p style={{color:"orangered"}}>{errors?.quantity && errors.quantity.message}</p>
        </label>
        
        <button type="submit">Add to List</button>
        {/* <h3>Product is : { formData.product } and quantity is: {formData.quantity} </h3> */}
    </form>
  )
}

export default HookFormShoppingListForm