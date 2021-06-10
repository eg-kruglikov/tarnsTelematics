import {combineReducers} from 'redux'

import itemsReducer from './itemsReducer'
import categorysReducer from './categorysReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  items: itemsReducer,
  categorys: categorysReducer,
  user: userReducer,
  
})

export default rootReducer