import { GET_ITEMS, GET_ITEMS_ID } from "../types/itemsTypes"
import child from '../../assets/child.json'


export const getItems = () => async (dispatch, getState) => {


  const itemFromServer = await child

  return dispatch({
    type: GET_ITEMS,
    payload: itemFromServer
  })

}


export const getItemId = (id) => async (dispatch, getState) => {
  
  const itemFromServer = await dispatch(getItems())
  console.log('itemFromServer', itemFromServer.payload);
  console.log('id from redux', id);
  const itemID = itemFromServer.payload.filter(el => el.parant_id == id)

  return dispatch({
    type: GET_ITEMS_ID,
    payload: itemID
  })

}

