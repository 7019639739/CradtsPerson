import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [inputList, setInputList] = useState([""])
  const [result, setResult] = useState('')
  const [negativeNumbers, setNegativeNumbers] = useState('')

  const handleAddButton = () => {


    setInputList([...inputList, ""])

  }


  const handleInputChange = (e, i) => {
    const list = [...inputList]
    list[i] = e.target.value
    setInputList(list)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit", inputList)

    addNumbers(inputList)
  }

  const addNumbers = (inputList) => {
    let count = 0
    let negativeNumArray = [];

    inputList.map((inp, i) => {
      let matches = inp.match(/\d+/g);
      console.log(matches)
      {
        matches != null && matches.map((num) => {
          if (num < 0) {
            negativeNumArray.push(num);
          }
          else
          {
            count = count + parseInt(num)
          }
        })
      }

      // count = count + parseFloat(inp)
      //}


    })
    setResult(count);
    setNegativeNumbers(negativeNumArray.toString());

  }


  return (
    <div className="App">
      <h1>CraftsPerson Project</h1>

      <form onSubmit={handleSubmit}>
        {inputList.map((x, i) => {
          return (<div key={i}>
            <input type="text" placeholder="Enter input" value={x} onChange={(e) => { handleInputChange(e, i) }} />
            {inputList.length - 1 === i && <button onClick={(e) => { handleAddButton() }}>+</button>}
          </div>)
        })}
        <input type="submit" />
      </form>

      <h3>Result : {result}</h3>
    </div>
  );
}

export default App;
