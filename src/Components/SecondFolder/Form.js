import React, { useState} from 'react'
import "../SecondFolder/Form.css"
import green from "../SecondFolder/SecondFolderAssets/Clicki.png"
import Input from '../SecondFolder/Input.js'


function Form() {
   const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    date: ""
   })
   const inputs = [
    {
        id:1,
        name: 'username',
        type: 'text',
        placeholder: "Username"
    },
    {
        id:2,
        name: 'email',
        type: 'email',
        placeholder: "Email address *"
    },
    {
        id:3,
        name: 'number',
        type: 'number',
        placeholder: "Phone Number *"
    }
   ]
  return (
    <form className='form'>
       <Input placeholder="username" />
    </form>
  )
}

export default Form