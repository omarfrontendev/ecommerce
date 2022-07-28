import React from 'react'
import './button.css'

const Button = ({ children }) => {
  return (
    <button className='button'>
      {children}
    </button>
  )
}

export default Button