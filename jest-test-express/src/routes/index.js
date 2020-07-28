import express from 'express'
import ProductRouter from './product.route'
import CategoryRouter from './category.route'
import UserRouter from './user.route'
import UserInfoRouter from './userInfo.route'
import { logEventError, logInfoEvent } from '../events/logging.event'

export default express.Router()
    // .use(function (req, res, next) {
    //     if (req.session.name) {
    //         next()
    //     } else {
    //         logEventError.emit('SESSION', res)
    //     }
    // })
    .use(function (req, res, next) {
        logInfoEvent.emit('ACCESS', req.originalUrl)
        next()
    })
    .use('/product', ProductRouter)
    .use('/category', CategoryRouter)
    .use('/user', UserRouter)
    .use('/user-info', UserInfoRouter)
    .use((req, res) => {
        logEventError.emit('ROUTE', req, res)
    })