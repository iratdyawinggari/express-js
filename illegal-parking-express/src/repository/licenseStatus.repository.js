import {getRepository} from 'typeorm'
import LicenseStatus from '../models/licenseStatus.model'

export default class LicenseStatusRepository{
    licenseStatusRepository(){
        return getRepository(LicenseStatus)
    }

    async findOne(id){
        const licenseStatus = await this.licenseStatusRepository().find({where:{id:id}})
        return licenseStatus
    }

    async findAllLicenseStatus(){
        const licenseStatus = await this.licenseStatusRepository().find()
        return licenseStatus
    }

    // async findAllparkingProduct(){
    //     const parking = await this.parkingRepository().find({relations:['product']})
    //     return parking
    // }

    async createLicenseStatus(licenseStatus){
        return await this.licenseStatusRepository().save(licenseStatus)
    }    
}