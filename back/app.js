import express  from "express"
import cors from 'cors'
import db from "./databse/db.js"
import rutas from './routes/routes.js'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(cors({
    origin: "*",
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  }))
  app.set('trust proxy', true)
app.use(express.json())
app.use('/poke', rutas)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}
app.listen(443, ()=>{
    console.log(`Server UP running in ip:${process.env.BD}`)
})