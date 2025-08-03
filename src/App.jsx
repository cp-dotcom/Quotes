
import { useState,useEffect } from "react"
function App(){

  const[words,setWords]=useState([])
  
  useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
    .then(res=>res.json())
    .then((data)=>{
      setWords(data.quotes.slice(0,15))
    },[])
  })

  
  return(

  <div>
    {words.map((x)=>(
      <h1 style={{background:"rgb(236, 250, 255)"}} key={x.id}>{x.quote}</h1>
    ))}
  </div>
  )
}

export default App