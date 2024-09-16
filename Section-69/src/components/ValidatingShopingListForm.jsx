import React, { useState } from 'react'

function ValidatingShoppingListForm({ addItem }) {
    const [ formData,setFormData ] = useState({ product:"",quantity:0 })
    const [ productIsValid,setProductIsValid ] = useState(false)

    const validate = (product)=>{
        if(product.length === 0 ){
            setProductIsValid(false)
        }else{
            setProductIsValid(true)
        }
    }

    const handleChange = (evt)=>{
        const { name,value } = evt.target
        if(name === "product"){
            validate(value)
        }
        setFormData({ ...formData,[name]:value })
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        if(productIsValid){
            addItem(formData)
            setFormData({ product:"",quantity:0 })
        }
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="prod">Proudct Name: </label>
        <input type="text" placeholder='product name' name='product' id='prod' value={formData.product} onChange={handleChange} />
        {!productIsValid && <p style={{color:"red"}}>Product name cannot be empty</p>}
        <br />
        <label htmlFor="qty">Quantity: </label>
        <input type="number" placeholder='quantity' name="quantity" id="qty" value={formData.quantity} onChange={handleChange} />
        <br />
        <button type="submit">Add to List</button>

        <h3>Product is : { formData.product } and quantity is: {formData.quantity} </h3>
    </form>
  )
}

export default ValidatingShoppingListForm