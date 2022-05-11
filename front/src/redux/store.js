import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import pokeReducer from './pokeReducer'

export default configureStore({
  reducer: {
    user: userReducer,
    poke: pokeReducer,
  }
})