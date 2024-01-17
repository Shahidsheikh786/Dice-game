import { useState } from 'react'
import './Style.scss'
import StartGame from "./Components/GameStart"
import GamePlay from "./Components/GamePlay"

function App() {
  const [isGameStart, setIsGameStart] = useState(true);
  
  
  return (
    <div className="app">
    {isGameStart == true ? <GamePlay/> : <StartGame toggle={setIsGameStart}/> }
    </div>
  )
}

export default App
