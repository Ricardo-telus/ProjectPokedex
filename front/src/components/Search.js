import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from 'axios';
import Moves  from './Moves'
const Search = () => {   
    const URI = 'http://localhost:8000/poke/mon'
    const[poke, setPoke]=useState([])
    const [moves, setMoves]=useState([])
    const[getMore, setGetMore]=useState(true)
    const[ready, setReady]=useState(false)
    const [cant, setCant]=useState({ini:1, fin:100})
    const { auth } = useContext(AuthContext); 
    const seeMoves=(e)=>{        
        let info=poke[e.target.value]
        setMoves(info)
    }
    const obtainPoke=async(e)=>{
        try {
            const response = await axios.post(URI, {
                id_poke:e.target.value,
                nickname:"add name",
                id_owner:auth.id
                }) 
            if (String(response.data.message)==="¡Registro creado correctamente!") {
                alert("Add successfully")
            } else {
                alert("Something bad happen")
            }
        } catch (error) {
            console.log(error)
            alert("Something bad happen")
        }          
    }
const getPokes= async ()=>{
    setGetMore(true)
        try {
            var temp=[]
            for (let index = cant.ini; index <= cant.fin; index++) {
                temp.push((await axios.get('https://pokeapi.co/api/v2/pokemon/'+index)).data)
            }
            setPoke(oldpoke=>poke.concat(temp))
            setReady(true)
            setCant({
                ini:(cant.fin+1),
                fin:(cant.fin+100)
            })
            setGetMore(false)
        } catch (error) {
            console.log(error)
        }       
    }
    useEffect(()=>{
        getPokes() 
        return ()=>{
            clearInterval(getPokes);
        }        
    },[])
    return (
        <div className="me-5">
            <div className="row row justify-content-md-center">
            {
                ready&&(                         
                    String(poke)>String("[]")?(
                        poke.map((element, index)=>{return(
                            <div className="mt-3 offset-2 offset-sm-4 offset-md-0 col-md-auto" key={element.name}>
                                <div className="card" style={{width: "14rem"}}>
                                    <img src={element.sprites.front_default} className="card-img-top" alt={element.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.url}
                                        Gender: {element.sprites.back_female===null?(
                                        "Male"
                                        ):(
                                            "Female"
                                        )}
                                    <br/><button 
                                    className="btn btn-success btn-sm" 
                                    type="button" 
                                    value={index}
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasScrolling" 
                                    aria-controls="offcanvasScrolling"
                                    onClick={seeMoves}
                                    >See moves</button> 
                                    </p>
                                    <button type="button" value={element.id} className="btn btn-primary w-100" onClick={obtainPoke}>Obtain</button>
                                </div>
                                </div>
                            </div> 
                            )})                        
                    ):(
                        <div className="spinner-border" role="status">
                         <span className="visually-hidden">Obtaining pokemons...</span>
                        </div>
                    )
                )
            } 
            </div>
            <div className="row">
                <center>
                    {getMore===true&&(
                        <div className="spinner-border text-dark" role="status">
                           <span className="visually-hidden">Loading...</span>
                        </div>  
                    )}                
                <br/><button 
                type="button" 
                className=" btn btn-success w-25 mt-5 mb-5"
                onClick={getPokes}
                    >More pokemons....</button></center>
            </div>  
                <Moves poke={moves}/>          
        </div>
    )
}

export default Search




