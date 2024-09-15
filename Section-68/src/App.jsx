import './App.css'
import LuckyN from './LuckyN'
import { sum } from './utils'


function lessThan4(dice){
  return sum(dice) < 4
}
function allSameValue(dice){
  return dice.every( v=> v === dice[0])
}
function App() {
  
  return (
    <>
      <LuckyN winCheck={lessThan4} numDice={2} title="Roll less than 4" />
      <LuckyN winCheck={allSameValue} numDice={3} title="Roll Same value" />
      {/* <LuckyN goal={15} numDice={3} /> */}
    </>
  )
}

export default App
