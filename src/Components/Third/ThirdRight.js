import React from 'react'
import "../Third/ThirdRight.css"
import greenline from "../Third/assetsThird/greenline.png"
import ThirdSelect from './ThirdSelect'

function ThirdRight() {
  return (
    <div>
        <div className='thirdright'>
            <h2> First step is done, continue to finish onboarding </h2>
            <div className='thirdrightdivline'> </div>
            <div className='nextthirdlevel'>
                <div className='level1'> <img src={greenline} alt="greenline" /> </div>
            </div>
            <div className='thirdrightdivline2'> </div>
            <div className='nextthirdlevel'>
                <div className='level2'> 2 </div>
            </div>
            <div className='informationexperience'>
                <h3> Personal information </h3>
                <h4> Chess experience </h4>
            </div>
            <div className='chessexperience'>
                <h5> Chess experience </h5>
                <h6> This is basic informaton fields </h6>
            </div>
            <ThirdSelect />
        </div>
    </div>
  )
}

export default ThirdRight