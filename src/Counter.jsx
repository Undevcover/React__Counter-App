import React from 'react'
import Count from './Count'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import "./App.css"

const Counter = ({ count, handleAdd, handleSubtract, icon}) => {
  
  return (
    <main className='counter-container' style={count < 0 ? {backgroundColor: '#AD8E70'}:{}}>
            <div  className='counter'>
            <div className='counter-head'>            
                <h1> Counter App </h1>
                
            </div>
            <Count 
                count = {count} 
            /> 
            <div className='buttons'>
              <FaMinusSquare className='operation' onClick={handleSubtract}/>
              <FaPlusSquare  className='operation' onClick={handleAdd}/>
            </div>
            
        </div>
        
    </main>
    
  )
}

export default Counter