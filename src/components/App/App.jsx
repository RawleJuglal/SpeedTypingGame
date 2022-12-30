import React, {useState, useRef} from 'react'
import './App.css'

function App() {
  const [text, setText] = useState({textContent:''})
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [start, setStart] = useState(false)
  const [words, setWords] = useState(0)
  const textBoxRef = useRef(null)
    
  React.useEffect(()=>{
      if(start && timeRemaining > 0){
          setTimeout(() => {
          removeOneSecond(timeRemaining)
          }, "1000") 
      } else if (timeRemaining === 0){
        endGame()
      }
      
      
  },[timeRemaining, start])

  

  function handleChange(e){
    const {value} = e.target
    setText(()=>{
      return {textContent:value}
    })
  }

  function calcNumberOfWords(text){
      const arr = text.trim().split(' ')
      console.log(arr.filter(word => word !== '').length )
      return arr.filter(word => word !== '').length  
  }

  function updateWords(num){
    setWords(num)
    return true
  }


  function removeOneSecond(time){
      const newTime = time -1;
      setTimeRemaining(newTime)
  }

  function resetRemainingTime(){
    setTimeRemaining(5)
  }

  function resetTextBox(){
    setText(()=>{
      return {textContent:''}
    })
  }

  function startGame(e){
    e.preventDefault()
    setStart(true)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame(){
    setStart(false)
    updateWords(calcNumberOfWords(text.textContent))
    resetRemainingTime(5)
    resetTextBox()
  }

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
