import { useState} from "react";
import './styles/user.css'
import axios from "axios";
const Home = () => {
    const URI = 'http://localhost:8000/poke/'
    let data = JSON.parse(sessionStorage.getItem("poke"))
    const [name, setName] = useState(data.name);
    const [nick, setNick] = useState(data.tName);
    const [region, setRegion] = useState(data.region);
    const [gender, setGender] = useState(data.gender);
    const [age, setAge] = useState(data.age);
    const [email, setEmail] = useState(data.email);
    const [trainer, setTrainer] = useState(data.trainerClass);
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [operation, setOperation]=useState(0)
    //process to update
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass===pass2) {
            const response = await axios.put(URI+email, {
                name:name,
                tName:nick,
                region:region,
                gender:gender,
                age:age,
                email:email,
                trainerClass:trainer,
                pass:pass
            })
            setPass("")
            setPass2("")
            setOperation(5)
            console.log(response)   
        } else {
            setOperation(10)
            console.log("don't match the passwords")
        }
    }
    return (
        <section>            
            <div className='container-fluid text-center text-light'>
                <div className="row">
                    <div className="col-10 offset-1 offset-sm-1 col-md-4 mt-5">
                        <h1>Welcome Back!</h1>
                        <img id="img" src="https://avatarfiles.alphacoders.com/812/thumb-81215.png" className="align-self-center mt-5" alt="user"/>                        
                        <h1 className="mt-5">{name}</h1>
                    </div>
                    <div className="col-10 offset-1 offset-sm-1 col-md-4 mt-3">
                    <form onSubmit={handleSubmit}>
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
                        <button className='btn btn-success w-50 col-10 offset-1'>Update information</button>                                                                                    
                        {operation>4&&(
                            <div className={operation===5?("alert alert-success mt-2 alert-dismissible fade show")
                            :("alert alert-danger mt-2 alert-dismissible fade show")} role="alert">
                                {operation===5?("information updated"):("something bad happen")}
                            </div>
                        )}
                    </div>                   
                    </form>
                    </div>                
                </div>
            </div>
        </section>
    )
}

export default Home
