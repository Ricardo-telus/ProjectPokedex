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
