import ShopingListItem from "./ShopingListItme"

function ShopingList({ items }) {
  return (
    <div>
        <h1>Shopping List</h1>
        <ul>
            {items.map( i => (
                <ShopingListItem
                    key={i.id} 
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}  
                />
                // <ShopingListItem key={i.id} {...i}  />
            ))}
        </ul>
    </div>
  )
}

export default ShopingList