import React, { useState } from 'react'
import Teamrow from './Teamrow'



const Table = (props) => {
    // const [winnerLog , setWinnerLog] = useState("")
    // const [LoserLog , setLoserLog] = useState("")

    const data = props.teams.sort((a, b) => Number(b.PWLT[3]) - Number(a.PWLT[3]))

    return (
        
        <table className='flex flex-col mx-5'>

            <thead className='flex shadow-md bg-slate-600 text-white'>
                <th className='w-[10%]'>#</th>
                <th className='w-[20%]'>Team</th>
                <th className='w-[15%]'>Played</th>
                <th className='w-[15%]'>Won</th>
                <th className='w-[15%]'>Lost</th>
                <th className='w-[15%]'>Points</th>
                <th className='w-[10%]'></th>
            </thead>
            
                {data.map((item, index) => {
    return <Teamrow
    winner={props.winner}
    loser={props.loser}
        key={item.id}
        id={index+1}
        name={item.name}
        P={item.PWLT[0]}
        W={item.PWLT[1]}
        L={item.PWLT[2]} 
        T={item.PWLT[3]}
        log={item.log}
        // teamlog = {props.logs.map((i)=>{
        //     return 
        // })}

        // wLog={props.winnerlog}
        // lLog={props.loserlog}
        >
        
    </Teamrow>
})}
            
        </table>
    )
}

export default Table