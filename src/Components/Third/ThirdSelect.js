import React, { useEffect, useState } from 'react'
import "../Third/ThirdSelect.css"

function ThirdSelect() {
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
    const [level, setLevel] = useState({})
    const onChangeLevel =(event)=> {
        setLevel(event.target.value)
        console.log(level + " is Selected")
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
  
   
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(level));
    }, [level]);
  return (
    <div className='select'>
        <select value={level} onChange={onChangeLevel}> 
            {options.map(option =>
                <option key={option.id} value={option.value}> {option.label} </option>
            )}
        </select>
        <select className='select2'>
                <option> Choose your character * </option>
                {
                    dataList.map(item=>{
                        return (
                            <option key={item.id}>  {item.name} <img src={`https://chess-tournament-api.devtest.ge/api${item.image}`} alt="playerimg" /> </option>
                        )
                    })
                }
        </select>
    </div>
  )
}

export default ThirdSelect