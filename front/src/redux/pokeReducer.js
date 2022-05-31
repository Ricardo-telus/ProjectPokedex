import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const token=JSON.parse(sessionStorage.getItem('poke'))?.array.tok
const URI=`${process.env.REACT_APP_URLBACK}/poke/mon`
console.log(URI)
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
export const getPokemones = () => async (dispatch, getState) => {
    try {        
        const response= await axios.get(URI+'g',{
            headers: {
                'Authorization': `Bearer ${token}`
              } 
        })          
            return response   
    } catch (error) {
        console.log(error)
    } 
}
export const updatePokemones = (toupdate,nickname) => async (dispatch, getState) => {
    try {
        const response = await axios.put(URI + "/" + toupdate[0], {
            id_poke:toupdate[1],
            nickname:nickname
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                  } 
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
export const savePoke = (id_poke) => async (dispatch, getState) => {
    try {
        const response = await axios.post(URI, {
            id_poke:id_poke,
            nickname:"add name"
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                  } 
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
        const response= await axios.delete(`${URI}/${poke}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              } 
        })
        if (response.data.message==="¡Registro eliminado correctamente!") {
            alert("deleted succesfully")
        }
    } catch (error) {
        console.log(error)
        alert("something bad happen")
    } 
}
