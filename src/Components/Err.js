import React from 'react'
import ".//Err.css"
import errorlogo from "../Components/assets/error.jpg"

function Err() {
  return (
    <div>
      <div className='img'>
        <img src={errorlogo} alt='errorlogo' />
      </div>
    </div>
  )
}

export default Err