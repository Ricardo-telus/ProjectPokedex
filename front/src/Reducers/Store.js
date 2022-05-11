import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import userReducer from './userReducer'
import pokesReducer from './pokeReducer'

const rootReducer = combineReducers({
    user: userReducer,
    poke:pokesReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}