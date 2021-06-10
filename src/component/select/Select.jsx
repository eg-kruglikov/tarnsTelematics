import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCategorys } from '../../redux/actionCreators/categorysAC';
import { getItemId } from '../../redux/actionCreators/itemsAC';

export default function Select() {

    const dispatch = useDispatch()
    const categorys = useSelector(state => state.categorys)

    useEffect(() => {
    
        dispatch(getCategorys())
    }, [])

    console.log(window.analytics);

    console.log('categorys--------_>', categorys);
 

    return (
        <div>

            <select onChange={(e)=>{dispatch(getItemId(e.target.value))}} className="" required aria-label="select example">
                {categorys?.map(el => <option onClick={()=>{console.log(el.id)}} key={el.id} value={el.id}>{el.name}</option>)}
           
            </select>
        </div>
    )
}
