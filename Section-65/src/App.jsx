
import './App.css'
import Clicker from './components/Clicker'
import ColorBox from './components/ColorBox'
import ColorBoxGrid from './components/ColorBoxGrid'
import Counter from './components/Counter'
import Form from './components/Form'
import PropertyList from './components/PropertyList'
import ShopingList from './components/ShopingList'
import Toggler from './components/Toggler'


const data = [
  { id:5,item:"eggs",quantity:12,completed:false },
  { id:2,item:"milk",quantity:3,completed:true },
  { id:3,item:"chicken breasts",quantity:4,completed:false },
  { id:4,item:"carrots",quantity:6,completed:true },
]

const properties = [
  { id:129031, name:"Deser Yurt", price:150, rating:4.3 },
  { id:129331, name:"Lone Mountain Cabin", price:50000, rating:3.2 },
  { id:129032, name:"Cactus Retreat", price:250, rating:4.8 },
  { id:129033, name:"Redwood Treehouse Escape", price:300, rating:5.7 },
  { id:129034, name:"Oceanview Cando", price:128, rating:5.7 },
  { id:129035, name:"Gold Miner Campground", price:96, rating:5.7 },


]

const colors = [
  "#FF69B4", "#FFC0CB", "#FFA07A", "#FFA500", "#FFD700", "#FFFF00", "#32CD32", "#008000", "#0000FF", "#4B0082", "#EE82EE", "#FF00FF", "#FFA07A", "#FFC0CB", "#FF69B4", "#FFA500", "#FFD700", "#FFFF00", "#32CD32", "#008000", "#0000FF", "#4B0082", "#EE82EE", "#FF00FF", "#FFA07A", "#FFC0CB", "#FF69B4", "#FFA500", "#FFD700", "#FFFF00", "#32CD32", "#008000", "#0000FF", "#4B0082", "#EE82EE", "#FF00FF", ]
function App() {

  return (
    <>
      {/* <Form /> */}
      {/* <Clicker message="hi..." buttonText="click me"  />
      <Clicker message="Please do not click..." buttonText="do not click me"  /> */}
      {/* <ShopingList items={data} />
      <PropertyList properties={properties} /> */}
      {/* <Counter />  */}

      {/* <Toggler /> */}
    
      <ColorBoxGrid colors={colors} />


    </>
  )
}

export default App
