import { Router } from 'express'
import UserService from '../services/user.service'

const UserRouter = Router()
    .get('/id', async (req, res, next) => {
        const rows = await new UserService().getUserById(Number(req.query.id))
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const user = { ...req.body }
        const rows = await new UserService().createUser(user)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message:'null' })
        }
    })
    .get('/', async (req, res, next) => {
        const rows = await new UserService().getAllUser()
        res.json(rows)
    })

export default UserRouter