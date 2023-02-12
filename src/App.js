import React from 'react'
import { useState } from "react"

import Counter from './Counter'
import "./App.css"


const App = () => {
const [count, setCount] = useState(0)

const handleSubtract = () => setCount((prevState) => prevState - 1)
const handleAdd = () => setCount((prevState) => prevState + 1)




  return (
    <div className='App'>
      <Counter 
      count = {count}
      handleAdd = {handleAdd}
      handleSubtract = {handleSubtract} 
      />
      
    </div>
  )
}

export default App