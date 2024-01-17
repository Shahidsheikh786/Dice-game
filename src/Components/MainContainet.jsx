
import { useState } from "react";

const MainContainer = ({getRandomNumber ,diceNumber, setScore}) => {
  
  const [showRules, setShowRules] = useState(false);
  
  const toggleRules = () =>{
    setShowRules((prev) => !prev)
  }
  
  return (
  <div className="main-container">
  <div className="dice-area">
<img src={`dice_${diceNumber}.png`} onClick={()=>{getRandomNumber(1,7)}}/>
<h4>Click on dice to roll</h4>
</div>

<div className="buttons-area">
<button  onClick={()=>setScore(0)}>Reset Score</button>
<button onClick={toggleRules}>Show rules</button>
</div>

 {showRules ? <div className="rules">
 <h1>How to play dice game </h1>
 <h3>Select any number</h3>
 <h3>click on dice to roll</h3>
 <h3>incididunt sit nisi ullamco do eu nostrud labore officia et</h3>
 </div> : <></>}
   
  
  
  </div>
  )
}

export default MainContainer;