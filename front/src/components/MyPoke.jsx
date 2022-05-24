import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getPokemones, deletePokemones, updatePokemones} from '../redux/pokeReducer'
import axios from 'axios';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Moves  from './Moves'
const Poke = () => {    
    const dispatch = useDispatch()
    const [poke, setPoke]=useState([])
    const [save, setSave]=useState([])
    const [moves, setMoves]=useState([])
    const [nickname, setNickname]=useState("")
    const [ready, setReady]=useState(false)
    const [modal, setModal] = useState(false);
    const [toupdate, setToUpdate] = useState("");
    const userData = useSelector(store => store.user)
    const seeMoves=(e)=>{        
        let info=poke[e.target.value]
        setMoves(info)
    }
    const deletPoke = (e)=>{
        dispatch(deletePokemones(e.target.value))    
    }
    const updatePoke=()=>{
        setModal(false)
        dispatch(updatePokemones(toupdate,nickname,userData.array.id))
        setToUpdate("")    
        setNickname("")
    }
    const paint=async(pokes)=>{
        var temp=(pokes.data)
        var temp2=[]
        var temp3=[]
        try {
            for (let index = 0; index < temp.length; index++) {
                temp2.push((await axios.get('https://pokeapi.co/api/v2/pokemon/'+temp[index].id_poke)).data)
                temp3.push({id:temp[index].id,nickname:temp[index].nickname})
            } 
            setSave(temp3)
            setPoke(temp2)                                 
            setReady(true)
        } catch (error) {
            console.log(error)
        }                              
    }
const getPokes= async ()=>{
        try {   
            await dispatch(getPokemones(userData.array.id))
            .then((response)=>{
                paint(response)
            }).catch((error)=>console.log(error))

        } catch (error) {
            console.log(error)
        }       
    }
      useEffect(()=>{
        getPokes()    
    },[]) 
    return (
        <div className="me-5">
            <div className="row row justify-content-md-center">
            {
                ready?(
                    poke.map((element, index) => {return(                        
                        <div className="mt-3 offset-2 offset-sm-4 offset-md-0 col-md-auto" key={index}>
                                <div className="card" style={{width: "14rem"}}>
                                    <img src={element.sprites.front_default} className="card-img-top" alt={element.name}/>
                                <div className="card-body">
                                <form>
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
                                    {String(save[index])!=="add name"&&
                                    (
                                        <label>Nickname:{save[index].nickname}</label>                                
                                    )}   
                                    </p>
                                    <button 
                                        type="button" 
                                        value={save[index].id}
                                        className="btn btn-sm btn-primary w-50" 
                                        onClick={deletPoke}>
                                    Eliminate</button>
                                    <button 
                                        type="button" 
                                        value={save[index].id} 
                                        className="btn btn-sm btn-success w-50" 
                                        onClick={(e) => {setModal(true); setToUpdate([e.target.value, poke[index].id])}}>
                                    {String(save[index].nickname)!=="add name"?(
                                        "Update"
                                    ):(
                                        "Nickname"
                                    )}
                                    </button>
                                </form>
                                </div>
                                </div>
                        </div> 
                    )})                      
                    ):(
                        <div className="spinner-border" role="status">
                         <span className="visually-hidden">Obtaining pokemons...</span>
                        </div>
                    )
            } 
            {(ready===true && poke.length===0&&(
                <>
                <center>
                <img 
                src="https://www.carteltec.com/wp-content/uploads/2021/08/Este-Pokemon-es-el-unico-que-no-tiene-debilidades.jpg" 
                className="rounded mx-auto d-block w-50 h-75 mt-5" alt="Pokemon"/> 
                <h1 className="text-light">You don't have pokemons yet</h1>
                </center>
                </>
            ))}
            </div>
            <PureModal
            header="Nickname"
            footer={
                <div>
                <button 
                    className="btn btn-sm btn-danger w-50" 
                    onClick={()=>{setModal(false);
                    return true;}}>
                Cancel</button>
                <button 
                className="btn btn-sm btn-success w-50" 
                onClick={updatePoke}>
                Save</button>
                </div>
            }
            isOpen={modal}
            closeButton="close"
            closeButtonPosition="bottom"
            onClose={() => {
                setModal(false);
                return true;
            }}
            >
            <p>Add or update the Nickname for you pokemon</p>
            <input 
                className="form-control form-control-sm" 
                type="text" 
                value={nickname} 
                placeholder="Here..." 
                onChange={(e)=>setNickname(e.target.value)}
            />
            </PureModal>;
            <Moves poke={moves}/>  
        </div>
    )
}


export default Poke