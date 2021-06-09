import React from 'react'
import { useState } from 'react'
import parant from '../../assets/parant.json'
import MultiSelect from '../multiSelect/MultiSelect.jsx'
import Select from '../select/Select.jsx'
import '../app.component.css'


export default function Body() {


    return (
        <div className='bodyContainer'>
         <Select/>
         <MultiSelect />
        </div>
    )
}
