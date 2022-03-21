import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
const Bar = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = async () => {
        sessionStorage.removeItem("poke");
        setAuth({});
        navigate('/login');
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Pokedex</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">My user</Link>          
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/mypoke">My Pokemones</Link>          
                </li>
                <li className="nav-item">
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