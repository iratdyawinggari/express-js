import { Router } from 'express'
import VehicleService from '../services/vehicle.service'

const VehicleRouter = Router()
    .get('/', async (req, res, next) => {
        const rows = await new VehicleService().getAllVehicle()
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const vehicle = { ...req.body }
        const rows = await new VehicleService().createVehicle(vehicle)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })
    .get('/id', async (req, res, next) => {
        const rows = await new VehicleService().getVehicleById(Number(req.query.id))
        res.json(rows)
    })

export default VehicleRouter