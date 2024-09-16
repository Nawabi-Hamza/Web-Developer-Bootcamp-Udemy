import React, { useState } from 'react'
import ShoppingListForm from './ShoppingListForm'
import { v4 as uuid } from "uuid"
import ValidatingShoppingListForm from './ValidatingShopingListForm'
import HookFormShoppingListForm from './HookFormShoppingForm'
function ShopingListItem() {
    const [ items,setItems ] = useState([
        { id:uuid(),product:"Bananas" , quantity:8 },
        { id:uuid(),product:"Egg" , quantity:3 },
    ])

    const addItem = (item)=>{
        // if(!item.product){
        //    return alert("Please enter product name")
        // }
        setItems(currItmes=>{
            return [...currItmes, {...item,id:uuid()}]
        })
    }

    return (
        <div>
            <h4>Shopping List</h4>
            <ul>
                {items.map( (pro)=>(
                    <li key={pro.id}> {pro.product} - {pro.quantity} </li>
                ) )}
            </ul>
            {/* <ShoppingListForm addItem={addItem}/> */}
            {/* <ValidatingShoppingListForm addItem={addItem} /> */}
            <HookFormShoppingListForm addItem={addItem} />
        </div>
    )
  
}

export default ShopingListItem