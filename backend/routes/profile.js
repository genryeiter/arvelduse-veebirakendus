import express from 'express'
import {updateProfile, deleteProfile, getProfile, getProfilesByUser} from '../controllers/profile.js'

const router = express.Router()

router.get('/:id', getProfile)
router.get('/', getProfilesByUser)
router.patch('/:id', updateProfile)
router.delete('/:id', deleteProfile)


export default router