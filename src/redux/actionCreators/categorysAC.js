import categorys from '../../assets/parant.json'
import { GET_CATEGORYS } from '../types/categorysTypes'


export const getCategorys = () =>  (dispatch, getState) => {


  const categorysFromServer =  categorys

  return dispatch({
    type: GET_CATEGORYS,
    payload: categorysFromServer
  })

}

