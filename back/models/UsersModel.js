//importamos la conexión a la DB
import db from "../databse/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const UserModel = db.define('users', {
    name: { type: DataTypes.STRING },
    tName: { type: DataTypes.STRING },
    region: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    age: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    trainerClass: { type: DataTypes.STRING },
    pass: { type: DataTypes.STRING },
 })

 export default UserModel