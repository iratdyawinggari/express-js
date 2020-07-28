import { Router } from 'express'
import SlotService from '../services/slot.service'

const SlotRouter = Router()
    .get('/', async (req, res, next) => {
        const rows = await new SlotService().getAllSlot()
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const slot = { ...req.body }
        const rows = await new SlotService().createSlot(slot.amount)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })
    .get('/id', async (req, res, next) => {
        const rows = await new SlotService().getSlotById(Number(req.query.id))
        res.json(rows)
    })
    .post('/update', async (req, res, next) => {
        const slot = { ...req.body }
        const rows = await new SlotService().updateSlot(slot)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })

export default SlotRouter