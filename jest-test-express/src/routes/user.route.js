import { Router } from 'express'
import UserService from '../services/user.service'

const UserRouter = Router()
    .get('/', async (req, res) => {
        const rows = await new UserService().getUser()
        res.json(rows)
    })

export default UserRouter