import {getRepository} from 'typeorm'
import Vehicle from '../models/vehicle.model'

export default class VehicleRepository{
    vehicleRepository(){
        return getRepository(Vehicle)
    }

    async findOne(id){
        const vehicle = await this.vehicleRepository().find({where:{id:id}})
        return vehicle
    }

    async findAllVehicle(){
        const vehicle = await this.vehicleRepository().find()
        return vehicle
    }

    // async findAllparkingProduct(){
    //     const parking = await this.parkingRepository().find({relations:['product']})
    //     return parking
    // }

    async createVehicle(vehicle){
        return await this.vehicleRepository().save(vehicle)
    }    
}