import express  from "express"
import cors from 'cors'
import db from "./databse/db.js"
import rutas from './routes/routes.js'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.1.3')
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
app.listen(8000, ()=>{
    console.log('Server UP running in http://192.168.1.3:8000')
})

/*
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
  labels:
    app: backend-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: backend-deployment
  template:
    metadata:
      labels:
        app: backend-deployment
    spec:
      containers:
        - name: backend
          image: umgtato/bpoke:v2
          env:
          - name: T_S 
            value: 2b6cf03b7d7b80f97f0bf676692c19
          ports:
            - containerPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: svc-backend
  labels:
    app: backend-deployment
spec:
  type: ClusterIP
  selector:
    app: backend-deployment
  ports:
    - port: 80
      targetPort: 8000
      protocol: TCP
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: poke
  labels:
    app: poke
spec:
  selector:
    matchLabels:
      app: poke
  replicas: 1
  template:
    metadata:
      labels:
        app: poke
    spec:
      containers:
      - name: frontend
        image: umgtato/front-pokedex:v2
         env:
          - name: REACT_APP_URLBACK 
            value: svc-backend
---
apiVersion: v1
kind: Service
metadata:
  name: poke-Server
   labels:
    app: poke
spec:
  type: LoadBalancer
  selector:
    app: poke
  ports:
    - port: 3000
      targetPort: 3000
*/