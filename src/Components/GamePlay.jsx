
import { useState } from "react";
import MainContainer from "./MainContainet"

const GamePlay = () => {
  
 const numberArr = [1,2,3,4,5,6]
  
  const [selectedNo, setSelectedNo ] = useState(undefined);
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);
  
  const getRandomNumber = (min ,max) =>{
    
    if(selectedNo ==  undefined || null){
      alert("please select any Number");
      return;
    }
    
  let Number = Math.floor(Math.random() * (max - min) + min);
      setDiceNumber(Number)
      
      
      if(selectedNo === diceNumber){
    setScore((prev)=> prev + diceNumber)
    }else{
      if (score <= 0) {
       setScore(0)
     }else{
    setScore((prev)=> prev - 2)
     }
    }
    
    setSelectedNo(undefined)
  }
 
 
  
  return (
  <div className="GamePlay">
  
  <div className="top">
  
  <div className="total-score">
  <h1>{score}</h1>
  <p>Totle Score</p>
  </div>
  
  <div className="selection-container">
  <div className="select-number">
   {numberArr.map((val , i)=>{
    return  (<div onClick={()=>{setSelectedNo(val)}} className={`item
    ${selectedNo == val ? "Selected" : "" }`}>{val}</div> )
  })}
  </div>
  <div className="bottom-line">Select any Number to start</div>
  </div>
  </div>
  

<MainContainer getRandomNumber={getRandomNumber} diceNumber={diceNumber}
 setScore={setScore}/>

 


  </div>
  )
}

export default GamePlay;