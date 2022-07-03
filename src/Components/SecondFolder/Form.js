import React from 'react'
import "../SecondFolder/Form.css"
import green from "../SecondFolder/SecondFolderAssets/Clicki.png"

function Form() {
  return (
    <form className='form'>
        <div className='formname'>
            <input placeholder='Name *' type='text' name='name' sds/>
            <img src={green} alt="green" />
        </div>
        <div>
            <input placeholder='Email Adress *' type='email' name='email'/>
            <img src={green} alt="green" />
        </div>
        <div>
            <input placeholder='Phone Number *' type='number' name='number '/>
            <img src={green} alt="green" />
        </div>
        <div>
            <input placeholder='Date of Birth *' type='date' name="DateOfBirth" />
            <img src={green} alt="green" />
        </div>
       
    </form>
  )
}

export default Form