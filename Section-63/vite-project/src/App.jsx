
import './App.css'
import Die from './Die'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Header'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {
const data = []
  return (
    <>
      <Greeter person="Hamza" from="Nawabi" />
      <Greeter from="Ahmadi" />
      <Greeter person="Azemi"  />

      <Die numSides={20} />
      <Die />
      <Die numSides={10} />

      <ListPicker values={[1,2,3,4]} />
      <ListPicker values={['A','B','C','D']} />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <Heading color='magenta' text="welcome !" fontSize="20px"/>
      <Heading color='teal' text="welcome !" fontSize="40px"/>
      <Heading color='magenta' text="welcome !"/>

      <DoubleDice />

      <ColorList colors={["red","pink","purple","teal"]}/>
      <ColorList colors={["olive","orangered","slategrey"]}/>

        <Slots val1="🍒" val2="🍒" val3="🍒" />
        <Slots val1="🍒" val2="🍌" val3="🍒" />
        <Slots val1="🍒" val2="🍒" val3="f" />

    </>
  )
}

export default App
