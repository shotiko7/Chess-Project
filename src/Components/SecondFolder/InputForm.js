import React, { useState } from 'react'
import "../SecondFolder/InputForm.css"
import Delete from "./SecondFolderAssets/X.png"
import Error from "./SecondFolderAssets/Error.png"

function InputForm(props) {
    const [focused, setFocused] = useState(false)
    const handleFocus =()=>{
        setFocused(true)
    }
    const {id, errorMessage, onChange, ...others } = props
  return (
    <div>
        <input {...others} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span>
            <img className='error' src={Error} alt="error" />
            {errorMessage}  
            <img className='delete' src={Delete} alt="delete" />
         </span>
    </div>
  )
}

export default InputForm