import React from 'react'
import Header from '../FirstPage/Header'
import "../FourthPage/Fourth.css"
import Fourthimg from "../FourthPage/FourthAssets/fourth.png"

function Fourth() {
  return (
    <div className='fourth'>
        <div className='fourth1'>
            <Header />
            <img src={Fourthimg} alt="fourth" />
        </div>
        <div className='fourth2'>
            <h2> Onboarding completed! </h2>
        </div>
    </div>
  )
}

export default Fourth