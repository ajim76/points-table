import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Teamrow = (props) => {
    
    const [isCollapse, setIsCollapse] = useState(true);
    const toggle =()=>{
       return setIsCollapse(!isCollapse);
    }

    // to arrange table w.r.t points can use sorting to teams data with respect to points and also need to change the rank
    return (
        
        <div >
            <tr onClick={() => toggle()} className='flex text-center shadow-md py-2 border'>
                <td className='w-[10%]'>{props.id}</td>
                <td className='w-[20%]'>{props.name}</td>
                <td className='w-[15%]'>{props.P}</td>
                <td className='w-[15%]'>{props.W}</td>
                <td className='w-[15%]'>{props.L}</td>
                <td className='w-[15%]'>{props.T}</td>
                <td className='cursor-pointer w-[10%]'>{isCollapse? <IoIosArrowUp />:<IoIosArrowDown /> }</td>
            </tr>

            <div style={isCollapse? {display:"none"}: {display:"block"}} className='w-[400px] m-auto'>
                {props.log.map((l)=>{
                    return <><p className='my-3' style={l.color?{color:"green"}:{color:"red"}}>{l.logData}</p></>
                })}
            </div>
        </div>

    )
}

export default Teamrow