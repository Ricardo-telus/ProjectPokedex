import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const URI=`${process.env.REACT_APP_URLBACK}/poke/`
const token=JSON.parse(sessionStorage.getItem('poke'))?.array.tok
const existentes = JSON.parse(sessionStorage.getItem("poke"))

export const userSlice = createSlice({
  name: 'user',
  initialState: existentes ? existentes : {
    array: [],
    active:false,
    error:''
  },
  reducers: {
    signUp: (state, action) => {
    state.array= action.payload;
    state.active=true;
    },
    signUpError: (state, action) => {
    state.array= [];
    state.active=false;
    state.error= action.payload;
    },
    userUpdate: (state, action) => {
    state.array= action.payload;
    },
    logOut: (state) => {
    state.array= [];
    state.active=false;
    state.error= '';
    }
  }
})

// Action creators are generated for each case reducer function
export const { signUp, signUpError, userUpdate, logOut } = userSlice.actions

export default userSlice.reducer

export const doLogin = (user, pwd) => async (dispatch, getState) => {
    try {    
        const res = await axios.post(URI+"login",{user,pwd})
        if (res.data?.message) {
            dispatch(signUpError(res.data))
            alert(res.data.message)
        }else{
          dispatch(signUp(res.data))
          console.log(res)
          sessionStorage.setItem("poke", JSON.stringify({array:res.data, active:true}));
        }        
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
            tName:data.nick,
            pass:data.pass
        },{
          headers: {
            'Authorization': `Bearer ${token}`
            } 
      })       
        if (response.data.message==="¡Registro actualizado correctamente!") {
          sessionStorage.setItem("poke", JSON.stringify({array:data, active:true}));
          alert('Data updated succesfully')
        }else{     
          alert('Something bad happen with the request')
        }
        dispatch(userUpdate(data))
        return response
    } catch (error) {
        console.log(error)
    }
  }
  export const doLogout = () => async (dispatch, getState) => {
    try {    
          sessionStorage.removeItem("poke");
        dispatch(logOut())
    } catch (error) {
        console.log(error)
    }
  }
  