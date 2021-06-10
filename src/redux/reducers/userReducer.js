import { GET_CLICkS } from "../types/userTypes"


const userReducer = (state = [], action) => {
    switch (action.type) {
  
  
      case GET_CLICkS:
  
        return [...state,  action.payload]
        
  
  
  
      default:
        return state
    }
  }
  
  export default userReducer