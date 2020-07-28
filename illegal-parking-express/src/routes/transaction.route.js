import { Router } from 'express'
import TransactionService from '../services/transaction.service'

const TransactionRouter = Router()
    .get('/', async (req, res, next) => {
        const rows = await new TransactionService().getAllTransaction()
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const transaction = { ...req.body }
        const rows = await new TransactionService().createTransaction(transaction)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })

    .get('/report', async (req, res, next) => {
        const rows = await new TransactionService().getReport()
        res.json(rows)
    })

    .get('/id', async (req, res, next) => {
        const rows = await new TransactionService().getTransactionById(Number(req.query.id))
        res.json(rows)
    })
    .post('/done', async (req, res, next) => {
        const transaction = { ...req.body }
        const rows = await new TransactionService().doneTransaction(transaction)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })

export default TransactionRouter