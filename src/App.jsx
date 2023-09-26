import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    checkDoubleLetter(inputText);
    setInputText("");
  }

  function checkDoubleLetter(inputText) {
    const words = inputText.split(" ");

    // Checking for double letter AND not triple letter
    const doubleRegex = /([a-zA-Z])\1{1}/i;
    const tripleRegex = /([a-zA-Z])\1{2}/i;

    for (let word of words) {
      if (!doubleRegex.test(word)) {
        return false;
      }
      if (tripleRegex.test(word)) {
        return false;
      }
    }

    return true;
  }

  return (
    <div className="App">
      <div className="hero">
        <h3>welcome to the</h3>
        <h1>GREEN GLASS DOORS</h1>
        <h3>what are you bringing in?</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}

export default App

