import React, { useEffect, useState } from 'react'
import "../Third/ThirdSelect.css"
import icon from "../Third/assetsThird/icon.png"
import {
  BrowserRouter as Router,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";

function ThirdSelect() {
  let navigateToSecond = useNavigate()
  let navigateToFourth = useNavigate()
    const options = [
        {
          label: "Beginner",
          value: "Beginner",
          id: 1
        },
        {
          label: "Intermediate",
          value: "Intermediate",
          id: 2
        },
        {
          label: "Professional",
          value: "Professional",
          id: 3
        },
      ];
    const onClickNext =(e)=>{
      if(level !== '' & selected !== ""){
        console.log(selected, level)
        localStorage.setItem('level', level)
        localStorage.setItem('select', selected)
        console.log(localStorage);
      }
      navigateToFourth('/fourthpage')
    }
    const [hidePhoto, setHidePhoto] = useState(false)
    const [selected, setSelected] = useState('')
    const onChangeSelected =(e)=>{
      setHidePhoto(true)
      setSelected(e.target.value)
      console.log(selected)
    }
    const [show, setShow] = useState(false)
    
    const onClickDrop =(e)=>{
      setShow(!show)
    }
    const [level, setLevel] = useState({})
    const onChangeLevel =(event)=> {
        setLevel(event.target.value)
    }
    // Fetch Api
   

    const [dataList, setDataList] = useState([])

    useEffect(()=>{
      fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
      .then(response => response.json())
      .then(data => {
          setDataList(data)
      });
    }, [])
  
  return (
    <div className='select'>
        <select value={level} onChange={onChangeLevel}> 
            {options.map(option =>
                <option key={option.id} value={option.value}> {option.label} </option>
            )}
        </select>
        <div className='select2'>
          <div onClick={onClickDrop} className='dropdown'>
            <h3> {selected ? selected : 'Choose your Character'}</h3> 
            <img src={icon} alt="icon" />
          </div>
          {show&& <ul className='ulsia'>
            {dataList.map(item=>{
              return (
                <li 
                onClick={(e)=> 
                setSelected(item.name)}
                className='sia'
                key={item.id}>
                  <p onClick={onChangeSelected} value={selected}> {item.name} </p> 
                  {hidePhoto&&<div>
                    <img src={`https://chess-tournament-api.devtest.ge${item.image}`} alt="apimg" />
                  </div>}
                </li>
              )
            })}
          </ul>}
        </div>
        <div className='done'>
                <button onClick={()=> navigateToSecond('/secondpage')} className='done1'> Back </button>
                <button onClick={onClickNext} className='done2'> Done </button>
        </div>
        <div>
          {/* {localStorage.getItem('level')};
          {localStorage.getItem('select')} */}
        </div>
    </div>
  )
}

export default ThirdSelect