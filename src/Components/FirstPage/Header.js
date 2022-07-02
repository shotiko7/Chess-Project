import React from 'react'
import Vector from './FirstPageAssets/Vector.svg'
import "../FirstPage/Header.css";

function Header() {
  return (
    <div className='maindivheader'> 
        <div className='parentdivheader'>
            <img src={Vector} alt="crawn" />
            <h1> Redberry Knight Cup </h1>
        </div>
    </div>
  )
}

export default Header