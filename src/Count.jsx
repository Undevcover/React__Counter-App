import React from 'react'
import "./App.css"

const Count = ({count}) => {
  return (
    <div className='count'>
        <h1 style={count < 0 ? {color: 'red'}: {color: '#fefefe'}}>{count }</h1>
    </div>
  )
}

export default Count