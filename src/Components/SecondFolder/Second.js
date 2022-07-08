import React from 'react'
import "../SecondFolder/Second.css"
import chess from "../SecondFolder/SecondFolderAssets/secondches.png"
import Form from '../SecondFolder/Form.js'
import Header from '../FirstPage/Header'

function Second() {
  return (
    <div className='secondmain'> 
      <div className='secondleft'>
        <Header />
        <div className='seconddown'>
          <img src={chess} alt="chessecond" />
          <h2> “When you see a good move, look for a better one.” </h2>
          <h3> -Emanuel Lasker </h3>
        </div>
      </div>
      <div className='secondright'>
          <h2> Start creating your account </h2>
          <div className='secondrightslide'> </div>
          <button className='btn1'> 1 </button>
          <button className='btn2'> 2 </button>
          <div className='secondrightside2'> </div>
          <div className='secondrightcheck'>
              <p className='personal'> Personal information </p>
              <p className='chess'> Chess experience </p>
          </div>
          <div className='informationdiv'>
              <h2 className='informationh2'> Personal information </h2>
              <p className='informationp'> This is basic informaton fields </p>
          </div>
          <Form />
      </div>
    </div>
  )
}

export default Second