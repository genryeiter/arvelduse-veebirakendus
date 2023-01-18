import express from 'express'
import {createClient, getClients} from '../controllers/clients.js'

const router = express.Router()

router.get('/', getClients)
router.post('/', createClient)

export default router