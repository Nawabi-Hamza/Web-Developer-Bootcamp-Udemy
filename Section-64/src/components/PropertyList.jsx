import PropertyListItem from "./PropertyListItem"
import "./Property.css"

function PropertyList({ properties }){
    return (
        <div className="property-list">
            {properties.map((property) => {
                return <PropertyListItem key={property.id} {...property}/>
            })}
        </div>
        )

}


export default PropertyList