import React, { useState } from 'react'
import Teams from '../assets/Teams'


const Forms = (props) => {


const handleClick=()=>{
    return props.handleSubmit();
}
const handleddlLoser =(e)=>{
    return props.handleLoser(e);
}

const handleddlWinner =(e)=>{
    return props.handleWinner(e);
}
const handleWinType =(e)=>{
    return props.handletype(e);
}
const handletxtRuns = (e) =>{
    return props.handleRuns(e);
}

  return (
    <div>
        <table className='shadow-lg '>
            <tr>
            <label htmlFor="winner">Winner</label>
            <select name="ddlWinner" id="ddlWinner" className='border mx-5' onChange={handleddlWinner}>
            <option disabled hidden selected>Select a Winner</option>
                {Teams.map((item)=>{
                   return <option value={item.name}>{item.name}</option>
                })}
            </select>
            <label htmlFor="loser">Loser</label>
            <select name="ddlLoser" id="ddlLoser" className='border ml-3' onChange={handleddlLoser}>
            <option disabled hidden selected>Select an Loser</option>
                {Teams.map((item)=>{
                   return <option value={item.name}>{item.name}</option>
                })}
            </select>
            </tr>
            <tr className='flex justify-between mt-3'>
            <p>Won by</p>
            <input type="number" name="rORw" id="txtRunWkt" onChange={handletxtRuns} className='border'/>
            <select name="" id="ddlWonBy" onChange={handleWinType}>
                <option value="Runs">Runs</option>
                <option value="Wickets">Wickets</option>
            </select>
            </tr>
            <tr className='text-center'>
                <button type="button" onClick={handleClick} className='bg-blue-500 text-white rounded-lg px-2 my-3'>Submit</button>
            </tr>
        </table>
    </div>
  )
}

export default Forms