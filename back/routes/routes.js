import express from 'express'
import { updateUser, getPoke, updateNickname, deletePoke, addPoke, getUser,createUser } from '../controllers/BlogController.js'
const router = express.Router()

//Pokes
router.post('/mon', addPoke)
router.get('/mon/:id', getPoke)
router.put('/mon/:id', updateNickname)
router.delete('/mon/:id', deletePoke)
//Users
router.get('/:email/:pass', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)


export default router
