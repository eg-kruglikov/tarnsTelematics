import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown'



export default function MultiSelect() {

    return (
        <div>
            <Multiselect
               options={[{name: 'Srigar', id: 1},{name: 'Sam', id: 2}]} // Options to display in the dropdown
                //selectedValues={['asfsdasd', 123]} // Preselected value to persist in dropdown
               // onSelect={'asfas'} // Function will trigger on select event
                //onRemove={'asfasf'} // Function will trigger on remove event
                displayValue="name"
            />
        </div>
    )
}
