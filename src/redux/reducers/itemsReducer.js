import { GET_ITEMS, GET_ITEMS_ID } from "../types/itemsTypes";


const itemsReducer = (state = [], action) => {
  switch (action.type) {


    case GET_ITEMS:

      return action.payload

    case GET_ITEMS_ID:

      return action.payload

    default:
      return state
  }
}

export default itemsReducer