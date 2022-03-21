import {  useState,useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles/login.css'
import axios from 'axios';
const URI="http://localhost:8000/poke/"

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response= await axios.get(URI+user+"/"+pwd)
            sessionStorage.setItem("poke", JSON.stringify(response.data));
            setAuth({ user, pwd, roles:'2001', id:response.data.id});
            navigate(from, { replace: true });
        } catch (error) {
            console.log(error)
        }}
        useEffect(()=>{
            let user=JSON.parse(sessionStorage.getItem("poke"))
                console.log(user)
                if (user!==null) {            
                  setAuth({ id:user.id, pwd:user.pass, roles:'2001', user:user.email})
                  navigate(from, { replace: true });
                 }else{
                     return {}
                 }

        },[])
    return (
        <div className='container-fluid text-center'>
            <div className='row mt-5' id="log">
                <div className='col-4 offset-2 d-none d-md-block' id="poke">
                </div>
                <div className='col-10 offset-1 offset-md-0 col-md-4' id='sign'>
                <form onSubmit={handleSubmit}>
                    <div className='row pt-5 mt-5'>
                        <h1>Sign In</h1>
                    </div>
                    <div className='row pt-5 d-flex justify-content-center'>
                        <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder='Username'
                                className='form-control w-50'
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            <br/>
                            <label className='mt-5' htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                placeholder='Password'
                                className='form-control w-50'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                        />
                    </div>
                    <div className='row pt-5'>
                    <button className='btn btn-success col-10 offset-1'>Sign In</button>                    
                    <p className='mt-5'>
                        Need an Account?<br />
                        <span className="line">
                            <Link to="/register">Sign Up</Link>
                        </span>
                    </p>
                        </div>                        
                    </form>
            </div>
            </div>            
            </div>

    )
}

export default Login
