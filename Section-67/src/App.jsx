import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Dumbo from './components/Dumbo'
import ScoreKeepter from './components/ScoreKeepter'
import EmojiClicker from './components/EmojiClicker'
import ScoreKeep from './components/ScoreKeep'

function App() {

  return (
    <>
      {/* <Counter /> */}

      {/* <Dumbo /> */}
    
      {/* <ScoreKeepter /> */}

      {/* <EmojiClicker /> */}

      <ScoreKeep numPlayers={10} target={10} />

    </>
  )
}

export default App

