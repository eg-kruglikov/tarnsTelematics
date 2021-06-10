import React from 'react'
import { useState } from 'react'
import parant from '../../assets/parant.json'
import MultiSelect from '../multiSelect/MultiSelect.jsx'
import Select from '../select/Select.jsx'
import '../app.component.css'
import History from '../hystory/History.jsx'
import { getClicks } from '../../redux/actionCreators/userAC'

import { useSelector, useDispatch } from "react-redux";



export default function Body() {
    
    const dispatch = useDispatch() 
    


    return (
        <>
        <div onClick={(e)=>{dispatch(getClicks(e.target.tagName))}} className='bodyContainer'>
         <Select/>
         <MultiSelect />
        </div>

        <div className='historyCss'>
            <History/>
        </div>
        </>
    )
}
