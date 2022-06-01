import {Sequelize} from 'sequelize'

const db = new Sequelize('poke', 'ric', 'ric',{
    host: '192.168.1.3',
    dialect: 'mysql'
})

export default db