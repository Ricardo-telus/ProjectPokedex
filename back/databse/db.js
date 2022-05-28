import {Sequelize} from 'sequelize'

const db = new Sequelize('Poke', 'ric', 'ric',{
    host: process.env.BD,
    dialect: 'mysql'
})

export default db