import { Router } from 'express'
import UserInfoService from '../services/userInfo.service'

const UserInfoRouter = Router()
    .get('/', async (req, res) => {
        const rows = await new UserInfoService().getUserInfo()
        res.json(rows)
    })

export default UserInfoRouter