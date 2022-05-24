import {call, put,takeEvery} from 'redux-saga/effects'
import axios from "axios"
const URI="http://localhost:8000/poke/"

function* doLogin(){
    const user=yield call(()=>axios.get(URI))
}