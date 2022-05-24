import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const URI="http://localhost:8000/poke/mon/"

export const userSlice = createSlice({
  name: 'poke',
  initialState:{
    array: []
  },
  reducers: {
    getPoke: (state, action) => {
    state.array= action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { getPoke } = userSlice.actions

export default userSlice.reducer

// actions
export const getPokemones = (user) => async (dispatch, getState) => {
    try {        
        const response= await axios.get(URI+user)          
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
        }else{
            alert("Error doing request")
        }
    } catch (error) {
        alert("something bad happen")
        console.log(error)
    }        
}
export const savePoke = (id_poke,id_user) => async (dispatch, getState) => {
    try {
        const response = await axios.post(URI, {
            id_poke:id_poke,
            nickname:"add name",
            id_owner:id_user
            }) 
        if (response.data.message==="¡Registro creado correctamente!") {
            alert("Obtain succesfully")
        }else{
            alert("Error doing request")
        }
        console.log(response)
    } catch (error) {
        alert("something bad happen")
        console.log(error)
    }        
}
export const deletePokemones = (poke) => async (dispatch, getState) => {
    try {        
        const response= await axios.delete(`${URI}${poke}`)
        if (response==="¡Registro eliminado correctamente!") {
            alert("deleted succesfully")
        }
    } catch (error) {
        console.log(error)
        alert("something bad happen")
    } 
}
