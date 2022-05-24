import { configureStore } from '@reduxjs/toolkit'
//import createSagaMiddleware from 'redux-saga'
import userReducer from './userReducer'
import pokeReducer from './pokeReducer'
//const sagaMiddleware = createSagaMiddleware()
export default configureStore({
  reducer: {
    user: userReducer,
    poke: pokeReducer,
  },
 // middleware:[sagaMiddleware]
}
)