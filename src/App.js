
import { useMemo, useState } from 'react';
import './App.css';

function App() {
  
  //  react- Javascript Code ! 
    const [Weight,setWeight]=useState(70);
    const [Height,setHeight]=useState(180);

    function onWeightChange(e){
      setWeight(e.target.value)

    }
    function onHeightChange(e){
      setHeight(e.target.value)

    }
    const output=useMemo(()=>{
      const calculatorHeight=Height/100;
      return(
        Weight/(calculatorHeight*calculatorHeight)).toFixed(1)
    },[Height,Weight])

  return (  
    <div className='main-div'>
        <h1>Project 4: BMI Calculator</h1>
        <div className='output-slides'>
            <p>Weight {Weight}kg</p>
            <input type='range' 
            min="35"
            max="150"
            onChange={onWeightChange}></input>
            <p>Height {Height}cm</p>
            <input type='range' 
            min="120"
            max="220"
            onChange={onHeightChange}></input>
        </div>
        <div className='Bmi-result'>
              <p>BMI is:<br></br> <b>{output}</b></p>   
        </div>
    </div>
  );
}

export default App;
