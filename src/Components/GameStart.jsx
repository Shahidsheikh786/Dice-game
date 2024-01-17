
const GameStart = ({toggle}) => {
  return (
  <div className="GameStart">
  <div>
  <img src="dices1.png" className="dicses-img"/>
  </div>
  <div>
  <h1>DICE GAME</h1>
  <button onClick={()=>{toggle(true)}}>Play Now</button>
  </div>
  </div>
  )
}

export default GameStart;