import {useState, useRef, useEffect} from 'react'

function useWordGame(){
    const [text, setText] = useState({textContent:''})
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [start, setStart] = useState(false)
    const [words, setWords] = useState(0)
    const textBoxRef = useRef(null)
    
  useEffect(()=>{
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

  return {textBoxRef, start, text, handleChange, timeRemaining, startGame, words}
}

export default useWordGame