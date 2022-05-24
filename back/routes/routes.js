import express from 'express'
import { updateUser, getPoke, updateNickname, deletePoke, addPoke, getUser,createUser } from '../controllers/BlogController.js'
import jwt from 'jsonwebtoken';
import 'dotenv/config'
const { sign, verify } = jwt;
const router = express.Router()

//Pokes
router.put('/mon/:id',verifyToken, updateNickname)
router.delete('/mon/:id',verifyToken, deletePoke)
router.get('/mong/',verifyToken, getPoke)
router.post('/mon', verifyToken, addPoke)
//Users
router.get('/:email/:pass', getUser)
router.post('/', createUser)
router.put('/:id', verifyToken, updateUser)

function verifyToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, String(process.env.T_S), (err, user) => {
      if (err!=null) {
        console.log(err) 
      }else{
          req.userId=user.result
      }
      
      console.log(user.result) 
      if (err) return res.sendStatus(403)
      
      next()
    })
}
export default router
