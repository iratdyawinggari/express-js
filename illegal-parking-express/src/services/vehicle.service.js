import VehicleRepository from '../repository/vehicle.repository'

export default class VehicleService {
    async getVehicleById(id) {
        return await new VehicleRepository().findOne(id);
    }

    async createVehicle(vehicle) {
        return await new VehicleRepository().createVehicle(vehicle)
    }

    async getAllVehicle() {
        return await new VehicleRepository().findAllVehicle()
    }
   
}