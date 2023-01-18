import express from 'express'
import {getInvoice, getInvoicesByUser, getTotalCount } from '../controllers/invoices.js'

const router = express.Router()

router.get('/count', getTotalCount)
router.get('/:id', getInvoice)
router.get('/', getInvoicesByUser)



export default router