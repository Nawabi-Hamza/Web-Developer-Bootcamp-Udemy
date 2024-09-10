
import PropTypes from "prop-types"

function ShopingListItem({ item, quantity, completed }){
    const styles = {
        color: completed ? "grey":"red", 
        textDecoration: completed && "line-through"
    }
    return  <li style={styles}>
                {item} -  {quantity}
            </li>
}

ShopingListItem.propTypes = {

    item:PropTypes.string,
    quantity:PropTypes.number,
    completed:PropTypes.bool

}

export default ShopingListItem


// <li key={i.id} style={{color: i.completed ? "grey":"red", textDecoration: i.completed && "line-through"}}>{i.item} -  {i.quantity}</li>
