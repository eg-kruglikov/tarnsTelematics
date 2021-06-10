import { GET_CATEGORYS } from "../types/categorysTypes"

const categorysReducer = (state = null, action) => {
    switch (action.type) {
  
  
      case GET_CATEGORYS
      :
  
        return action.payload
        
  
  
  
      default:
        return state
    }
  }
  
  export default categorysReducer