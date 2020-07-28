import {getRepository} from 'typeorm'
import Slot from '../models/slot.model'

export default class SlotRepository{
    slotRepository(){
        return getRepository(Slot)
    }

    async findOne(id){
        const slot = await this.slotRepository().find({where:{id:id}})
        return slot
    }

    async findAllSlot(){
        const slot = await this.slotRepository().find()
        return slot
    }

    async updateSlot(slot){
        return await this.slotRepository().save(slot)
    }

    // async findAllparkingProduct(){
    //     const parking = await this.parkingRepository().find({relations:['product']})
    //     return parking
    // }

    async createSlot(slot){
        return await this.slotRepository().save(slot)
    }    
}