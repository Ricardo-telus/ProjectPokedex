import axios from "axios"
const URI="http://localhost:8000/poke/"
const existentes = JSON.parse(sessionStorage.getItem("poke"))

const dataInicial = existentes ? existentes : {
  array: [],
  active:false
}

// types
const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
const SET_USER_FAIL = 'SET_USER_FAIL'
const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

// reducer
export default function pokesReducer(state = dataInicial, action){
  switch(action.type){
      case SET_USER_SUCCESS:
          return {...state, array: action.payload, active:true}
      case SET_USER_FAIL:
          return {...state, array: dataInicial}
      case UPDATE_USER:
          return {...state, array: action.payload}
      case LOGOUT:
          return {...state, array: [], active:false}
      /* case SET_USER:
          return {...state, array: action.payload} */
      default:
          return state
  }
}
// actions
export const doLogin = (user, pwd) => async (dispatch, getState) => {
  try {    
      let call='SET_USER_SUCCESS'
      const res = await axios.get(URI+user+"/"+pwd)
      if (res.data?.message) {
        call='SET_USER_FAIL'
      }else{
        sessionStorage.setItem("poke", JSON.stringify({array:res.data, active:true}));
      }
      dispatch({
          type: call,
          payload: res.data
      })
  } catch (error) {
      console.log(error)
  }
}
export const doLogout = () => async (dispatch, getState) => {
  try {    
        sessionStorage.removeItem("poke");
      dispatch({
          type: 'LOGOUT',
      })
  } catch (error) {
      console.log(error)
  }
}
export const updateData = (data) => async (dispatch, getState) => {
  try {    
  
      const response = await axios.put(URI+data.email, {
          name:data.name,
          trainerClass:data.trainerClass,
          region:data.region,
          gender:data.gender,
          age:data.age,
          email:data.email,
          nick:data.nick,
          pass:data.pass
      })       
      console.log(response)
      if (response.data.message==="¡Registro actualizado correctamente!") {
        sessionStorage.setItem("poke", JSON.stringify({array:data, active:true}));
      }else{
        console.log('vino con error')        
      }
      dispatch({
          type: 'UPDATE_USER',
          payload: data
      })
      return response
  } catch (error) {
      console.log(error)
  }
}
