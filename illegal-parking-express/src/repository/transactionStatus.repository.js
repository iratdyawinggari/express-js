import {getRepository} from 'typeorm'
import TransactionStatus from '../models/transactionStatus.model'

export default class TransactionStatusRepository{
    TransactionStatusRepository(){
        return getRepository(TransactionStatus)
    }

    async findOne(id){
        const transactionStatus = await this.TransactionStatusRepository().find({where:{id:id}})
        return transactionStatus
    }

    // async findAllLicenseStatus(){
    //     const licenseStatus = await this.licenseStatusRepository().find()
    //     return licenseStatus
    // }

    // async findAllparkingProduct(){
    //     const parking = await this.parkingRepository().find({relations:['product']})
    //     return parking
    // }

    // async createLicenseStatus(licenseStatus){
    //     return await this.licenseStatusRepository().save(licenseStatus)
    // }    
}