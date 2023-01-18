import express from 'express'
import {getProfile, getProfilesByUser} from '../controllers/profile.js'

const router = express.Router()

router.get('/:id', getProfile)
router.get('/', getProfilesByUser)


export default router