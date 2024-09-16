import React, { useState } from 'react'

function ShoppingListForm({ addItem }) {
    const [ formData,setFormData ] = useState({ product:"",quantity:0 })
    
    const handleChange = (evt)=>{
        const { name,value } = evt.target
        setFormData({ ...formData,[name]:value })
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        // console.log(product,quantity)
        // const { product,quantity } = formData
        // addItem({product,quantity})
        addItem(formData)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <h3>Product is : { formData.product } and quantity is: {formData.quantity} </h3>
        <label htmlFor="prod">Proudct Name: </label>
        <input type="text" placeholder='product name' name='product' id='prod' value={formData.product} onChange={handleChange} /><br />
        <label htmlFor="qty">Quantity: </label>
        <input type="number" placeholder='quantity' name="quantity" id="qty" value={formData.quantity} onChange={handleChange} /><br />
        <button type="submit">Add to List</button>
    </form>
  )
}

export default ShoppingListForm