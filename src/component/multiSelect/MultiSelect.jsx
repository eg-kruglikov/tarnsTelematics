import React, {useEffect} from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import { useSelector, useDispatch } from "react-redux";
import { getItems } from '../../redux/actionCreators/itemsAC';



export default function MultiSelect() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.items)

    // useEffect(() => {
    
    //     dispatch(getItems())
    // }, [])

    
    console.log('items--------_>', items);

    return (
        <div style={{width: '200px'}}>
            <Multiselect
               options={items ? items : []} // Options to display in the dropdown
                //selectedValues={['asfsdasd', 123]} // Preselected value to persist in dropdown
               // onSelect={'asfas'} // Function will trigger on select event
                //onRemove={'asfasf'} // Function will trigger on remove event
                displayValue="name"
            />
        </div>
    )
}
