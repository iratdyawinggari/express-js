import { Router } from 'express'
import UserInfoService from '../services/userInfo.service'

const UserInfoRouter = Router()
    .get('/id', async (req, res, next) => {
        const rows = await new UserInfoService().getUserInfoById(Number(req.query.id))
        res.json(rows)
    })
    .get('/', async (req, res, next) => {
        const rows = await new UserInfoService().getAllUserInfo()
        res.json(rows)
    })

export default UserInfoRouter