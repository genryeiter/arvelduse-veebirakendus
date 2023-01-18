import express from 'express'
import {createClient, deleteClient, getClients, getClientsByUser, updateClient} from '../controllers/clients.js'

const router = express.Router()

router.get('/', getClients)
router.post('/', createClient)
router.patch('/:id', updateClient)
router.delete('/:id', deleteClient)
router.get('/user', getClientsByUser);

export default router