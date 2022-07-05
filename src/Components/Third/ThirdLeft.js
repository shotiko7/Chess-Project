import React from 'react';
import Header from '../FirstPage/Header';
import "../Third/ThirdLeft.css"
import background from "../Third/assetsThird/background.svg"

function ThirdLeft() {
  return (
    <div>
        <div className='thirdleftup'>
          <Header />
          <div className='thirdleftdown'>
            <img src={background} alt="backgrounad" />
            <h2> “Many have become chess masters; no one has become the master of chess.”</h2> 
            <h3> - Siegbert Tarrasch </h3> 
          </div>
        </div>
    </div>
  )
}

export default ThirdLeft