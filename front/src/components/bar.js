import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doLogout } from '../Reducers/userReducer'
import { useDispatch } from 'react-redux';
import { Tittle } from './Title'
const Bar = () => {
    const [title, setTitle]=useState('My user')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logout = () => {        
        dispatch(doLogout())
        navigate('/login');
    }
  return (
    <div>
          <Tittle data={title}/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Pokedex</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item" onClick={()=>setTitle('My user')}>
                <Link className="nav-link active" aria-current="page" to="/">My user</Link>          
                </li>
                <li className="nav-item" onClick={()=>setTitle('My Pokemones')}>
                <Link className="nav-link" to="/mypoke">My Pokemones</Link>          
                </li>
                <li className="nav-item" onClick={()=>setTitle('Pokemones')}>
                <Link className="nav-link" to="/pokes">Search more</Link>          
                </li>                
            </ul>            
            </div>
            <button className="btn btn-danger mx-5" onClick={logout} type="submit">Sign out</button>
        </div>        
        </nav>
    </div>
  )
}

export default Bar