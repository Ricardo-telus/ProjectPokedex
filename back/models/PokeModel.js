//importamos la conexión a la DB
import db from "../databse/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const PokeModel = db.define('Pokes', {
    id_poke: { type: DataTypes.STRING },
    nickname: { type: DataTypes.STRING },
    id_owner: { type: DataTypes.STRING }
 })

 export default PokeModel