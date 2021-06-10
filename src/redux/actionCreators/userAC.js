import { GET_CLICkS } from "../types/userTypes"

export const getClicks = (str) => {

    

    return {
      type: GET_CLICkS,
      payload: str
    }
  
  }