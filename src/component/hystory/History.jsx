import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function History() {
    const user = useSelector(state => state.user)
    console.log('user---->', user);


    return (
        <div>
            <h1>History user</h1>
            <ul>
                {user.map((el, num) => <li key={num}>click on {el}</li>)}
            </ul>
            
        </div>
    )
}
