import UserModel from "../models/UsersModel.js";
import PokeModel from "../models/PokeModel.js";
//** Métodos para el CRUD **/

                                                //Usuarios
//inicio de session 
export const getUser = async (req, res) => {
    try {
        const blog = await UserModel.findAll({
            where:{ email:req.params.email }
        })
        if (String(blog[0])!=="undefined") {
            if (String(req.params.pass)===String(blog[0].dataValues.pass)) {
                res.json(blog[0].dataValues) 
            } else {
                res.json( {message: "Password don't match"} )    
            }         
        }else{
            res.json( {message: "user don't found"} )    
        }
        
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crear un usuario nuevo
export const createUser = async (req, res) => {
    try {
       await UserModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateUser = async (req, res) => {
    try {
        await UserModel.update(req.body, {
            where: { email: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

                                                    //Poke
//Obtener pokemones del usuario
export const getPoke = async (req, res) => {
    try {
        const blog = await PokeModel.findAll({
            where:{ id_owner:req.params.id }
        })
        res.json(blog)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//add poke to a user
export const addPoke = async (req, res) => {
    try {
       await PokeModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateNickname = async (req, res) => {
    try {
        await PokeModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deletePoke = async (req, res) => {
    try {
        await PokeModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}