import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const URI = 'http://localhost:8000/poke/'
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [region, setRegion] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [trainer, setTrainer] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [validMatch, setValidMatch] = useState(false);
  
    useEffect(() => {
        setValidMatch(pass === pass2);
    }, [pass, pass2])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validMatch===true) {
            if (name!==""&&nick!==""&&region!==""&&gender!==""&&age!==""&&email!==""&&trainer!==""&&pass!=="") {
                const response = await axios.post(URI, {
                    name:name,
                    tName:nick,
                    region:region,
                    gender:gender,
                    age:age,
                    email:email,
                    trainerClass:trainer,
                    pass:pass
                })
                setName('')
                setAge('1')
                setNick('')
                setTrainer('')
                setRegion('')
                setEmail((''))
                setPass("")
                setPass2("")
                setAuth({ email, pass, roles:'2001', id:response.data.id});
                navigate(from, { replace: true });   
            }else{
                alert("some field is empty")
            }           
        } else {
            console.log("don't match the passwords")
        }
    }

    return (
        <>
        <div className='container-fluid text-center'>
            <div className='row mt-5' id="log">
                <div className='col-4 offset-2 d-none d-md-block' id="poke">
                </div>
                <div className='col-10 offset-1 offset-md-0 col-md-4' id='sign'>
                <form onSubmit={handleSubmit}>
                    <div className='row pt-5 mt-5'>
                        <h1>Sign Up</h1>
                    </div>
                    <div className='row pt-3 d-flex justify-content-center'>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Name">Name:</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    id="Name"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                            </div>
                        </div>    
                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label" htmlFor="nickname">Trainer nickname:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    id="nickname"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setNick(e.target.value)}
                                    value={nick}
                                    required
                                />
                            </div>
                        </div>   
                        <div className="mb-3 row">
                        {/* <select className="form-select" aria-label="Default select example">
                                <option defaultValue="s">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> */}
                            <label className="col-sm-2 col-form-label" htmlFor="Region">Region:</label>
                            <div className="col-sm-10">                        
                                <input
                                    type="text"
                                    id="Region"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setRegion(e.target.value)}
                                    value={region}
                                    required
                                />
                            </div>
                        </div>   
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Gender">Gender:</label>
                            <div className="col-sm-10 ">
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                value="Female"
                                name="flexRadioDefault" 
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                                id="flexRadioDefault1"/>
                                <label className="form-check-label me-5" htmlFor="flexRadioDefault1">
                                    Female
                                </label>
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                value="Male"
                                name="flexRadioDefault" 
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                                id="flexRadioDefault2"/>
                                <label className="form-check-label me-5" htmlFor="flexRadioDefault2">
                                    Male
                                </label>
                                <input 
                                className="form-check-input" 
                                type="radio" 
                                value="Other"
                                name="flexRadioDefault" 
                                checked={gender === "Other"}
                                onChange={(e) => setGender(e.target.value)}
                                id="flexRadioDefault3"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Other
                                </label>
                            </div>
                        </div>   
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Age">Age:</label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    id="Age"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age}
                                    required
                                />
                            </div>
                        </div>   
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Trainer">Trainer class:</label>
                            <div className="col-sm-10">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="Battle"
                                    name="flexRadio2" 
                                    checked={trainer === "Battle"}
                                    onChange={(e) => setTrainer(e.target.value)}
                                    id="flexRadioDefault4"/>
                                <label className="form-check-label me-5" htmlFor="flexRadioDefault2">
                                    Battle
                                </label>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="Show"
                                    name="flexRadio2" 
                                    checked={trainer === "Show"}
                                    onChange={(e) => setTrainer(e.target.value)}
                                    id="flexRadioDefault5"/>
                                <label className="form-check-label me-5" htmlFor="flexRadioDefault5">
                                  Show
                                </label>
                            </div>
                        </div> 
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Email">Email:</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    id="Email"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                        </div> 
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Password">Password:</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    id="Password"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setPass(e.target.value)}
                                    value={pass}
                                    required
                                />
                            </div>
                        </div>     
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label" htmlFor="Password2">Confirm password:</label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    id="Password2"
                                    className='form-control'
                                    autoComplete="off"
                                    onChange={(e) => setPass2(e.target.value)}
                                    value={pass2}
                                    required
                                />
                            </div>
                        </div>   
                    </div>
                    <div className='row pt-5'>
                        <button className='btn btn-success col-10 offset-1'>Sign Up</button>                    
                        <p className='mt-5'>
                        Already registered?<br />
                            <span className="line">
                                <Link to="/login">Sign In</Link>
                            </span>
                        </p>
                     </div>                        
                    </form>
            </div>
            </div>
        </div>
        </>
    )
}

export default Register
