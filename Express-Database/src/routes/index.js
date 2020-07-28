import express from 'express';
import ProductRouter from './product.route'
import CategoryRouter from './category.route'
import UserRouter from './user.route'
import UserInfoRouter from './userInfo.route'

export default express.Router()
.use('/product',ProductRouter)
.use('/category',CategoryRouter)
.use('/user',UserRouter)
.use('/userInfo',UserInfoRouter)
.use((req,res,next)=>{
    res.status(404).json({message:'Not Found.'});
})