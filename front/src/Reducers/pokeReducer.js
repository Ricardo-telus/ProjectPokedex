import axios from "axios"
const URI="http://localhost:8000/poke/mon/"
const dataInicial = {
  array: []
}

// types
const GET_POKES = 'GET_POKES'
const DELETE_POKES = 'DELETE_POKES'
const UPDATE_POKES = 'UPDATE_POKES'

// reducer
export default function pokesReducer(state = dataInicial, action){
  switch(action.type){
      case GET_POKES:
          return {...state, array: action.payload}
      case DELETE_POKES:
          return {...state, array: action.payload}
      case UPDATE_POKES:
          return {...state, array: action.payload}
      default:
          return state
  }
}
// actions
export const getPokemones = (user) => async (dispatch, getState) => {
    try {        
        const response= await axios.get(URI+user)
            dispatch({
                type: 'GET_POKES',
                payload: response
            }) 
            return response   
    } catch (error) {
        console.log(error)
    } 
}
export const updatePokemones = (toupdate,nickname,id) => async (dispatch, getState) => {
    try {
        const response = await axios.put(URI + toupdate[0], {
            id_poke:toupdate[1],
            nickname:nickname,
            id_owner:id
            }) 
        if (response.data.message==="¡Registro actualizado correctamente!") {
            alert("updated succesfully")
        }  
    } catch (error) {
        console.log(error)
    }        
}
export const deletePokemones = (poke) => async (dispatch, getState) => {
    try {        
        const response= await axios.delete(`${URI}${poke}`)
        return response.data.message  
    } catch (error) {
        console.log(error)
    } 
}
