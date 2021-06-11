
import { getClicks } from "../src/redux/actionCreators/userAC";
import userReducer from "../src/redux/reducers/userReducer";








it ('test UserReducer 1', async () =>  {
  
  let action = getClicks('hello')
 
  let newState = userReducer([], action)

    expect(newState.length).toBe(1)
}

)

it ('test UserReducer 2', async () =>  {
    let action = getClicks('hello')
   
    let newState = userReducer(['gfgf', 'ekmkm'], action)
  
      expect(newState.length).toBe(3)
  }
  
  )


  
  
  