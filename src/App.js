
import './App.css';

import { useState } from 'react'

import React from 'react'

export default function App() {
  let [value, setValue] = useState("");


  function cls() {
    setValue(" ");
  }
  function display(e) {
    setValue(value +
      e.target.value)
  }
  function handleChange(e) {
    setValue(e.target.value
    );
  }
  function calculate(e) {
    let input = e.target.value;
    setValue(eval(input));
  }

  return (
    <div className='App'>
      <h1 className='heading'>CALCULATOR</h1>
      <div className='container'>
        <div className='main'>
          <div className='buttons' style={{ margin: "20px" }}>
            <input type={"text"} value={value} onChange={handleChange}></input><br />

            <button value={"0"} onClick={display}>0</button>
            <button value={"1"} onClick={display}>1</button>
            <button value={"2"} onClick={display}>2</button>
            <button value={"+"} onClick={display}>+</button><br />

            <button value={"3"} onClick={display}>3</button>
            <button value={"4"} onClick={display}>4</button>
            <button value={"5"} onClick={display}>5</button>
            <button value={"-"} onClick={display}>-</button><br />

            <button value={"6"} onClick={display}>6</button>
            <button value={"7"} onClick={display}>7</button>
            <button value={"8"} onClick={display}>8</button>
            <button value={"*"} onClick={display}>*</button><br />

            <button value={"9"} onClick={display}>9</button>
            <button value={"."}  onClick={display}>.</button>
            <button value={"/"} onClick={display}>/</button>
            <button value={value} onClick={calculate}>=</button><br/>
            <button onClick={cls} >Clr</button>


          </div>
        </div>
      </div>
    </div>



  )
}


