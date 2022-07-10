import React, { useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    useNavigate,
    Route,
    Routes,
  } from "react-router-dom";
import "../SecondFolder/Form.css"
import green from "../SecondFolder/SecondFolderAssets/Clicki.png"
import Next from "../SecondFolder/SecondFolderAssets/Next.png"
import InputForm from '../SecondFolder/InputForm.js'

    
function Form() {
    let navigate = useNavigate()
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
        errorMessage: "Is required! Minimal simbol should be 2",
        pattern: "^[A-Za-z]{2,16}$",
        placeholder: "Username",
        required: true
    },
    {
        id:2,
        name: 'email',
        type: 'email',
        errorMessage: "Please Enter Valid Email Adress",
        placeholder: "Email address *",
        required: true
    },
    {
        id:3,
        name: 'number',
        type: 'text',
        errorMessage: "Phone number quantity should be exatly 9!",
        placeholder: "Phone Number *",
        required: true
    },  
    {
        id:4,
        name: 'date',
        type: 'date',
        errorMessage: "Data is Required",
        placeholder: "Date of Birth *",
        required: true
    }
   ]
   
   const submit =(e)=>{
        e.preventDefault()
        navigate('/thirdpage')
        console.log(values)
        localStorage.setItem('input', JSON.stringify(values))
   }
   localStorage.getItem('input');
   const onChange =(e)=>{
    setValues({...values, [e.target.name]: e.target.value})
   }
   localStorage.setItem('input', values)
  return (
    <div>
        <form onSubmit={submit} className="form" >
            {inputs.map((input) =>{
                return (<InputForm key={input.id} {...input} onChange={onChange} value={values[input.name]} />)
            })}
            <button className='nextpage'> Next <img src={Next} alt="NextPage"/> </button>
        </form>
        <div className='submitpage'>
                <button className='backpage' onClick={()=> {
                    navigate("/")
                }}>  Back </button>
        </div>
    </div>
  )
}


export default Form