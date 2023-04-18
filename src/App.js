import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setText] = useState(0);

  // useState return two values state which is the stream 
  const sum = () => {
    if (state1 && state2 !== '') {
      const result = parseInt(state1) + parseInt(state2);
      setText(result);
    }


  }
  const substract = () => {
    const result = parseInt(state1) - parseInt(state2);
    setText(result);
  }
  const multiply = () => {
    const result = parseInt(state1) * parseInt(state2);
    setText(result);
  }
  const division = () => {
    const result = parseInt(state1) / parseInt(state2);
    setText(result);
  }



  return (
    <>
      <div class="App-header" >
        {/* hello world {state} state2 ={state2} */}

        <input type='text' onChange={(e) => setState1(e.target.value)} />
        <input type='text' onChange={(e) => setState2(e.target.value)} />
        <button onClick={sum}>+</button >
        <button onClick={substract}>-</button >
        <button onClick={multiply}>*</button >
        <button onClick={division}>/</button >

        <label>{state3}</label>
      </div>

      {/* <button onClick={() => { state2 += 1; console.log(state2) }} >+</button >
      <button onClick={() => { console.log(22); setState(state2) }}>-</button> */}
    </>
  );
}

export default App;
