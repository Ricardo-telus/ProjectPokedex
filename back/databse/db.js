import {Sequelize} from 'sequelize'

const db = new Sequelize('poke', 'ric', 'ric',{
    host: process.env.BD,
    dialect: 'mysql'
})

export default db