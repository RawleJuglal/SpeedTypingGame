import React, {useState, useRef} from 'react'
import './App.css'
import useWordGame from '../../hooks/useWordGame'

function App() {
  const {textBoxRef, start, text, handleChange, timeRemaining, startGame, words} = useWordGame()

  return (
    <div className="--app-app-container">
      <h1>How fast do you type?</h1>
      <form>
        <textarea ref={textBoxRef} disabled={!start} value={text.textContent} onChange={handleChange}/>
      </form>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={start} onClick={(event)=>startGame(event)}>Start</button>
      <h1>Previous Word Count: {words} </h1>
    </div>
  )
}

export default App
