import express from 'express';
import SlotRouter from './slot.route'
import VehicleRouter from './vehicle.route'
import TransactionRouter from './transaction.route'

export default express.Router()
.use('/slot',SlotRouter)
.use('/vehicle',VehicleRouter)
.use('/transaction',TransactionRouter)
.use((req,res,next)=>{
    res.status(404).json({message:'Not Found.'});
})