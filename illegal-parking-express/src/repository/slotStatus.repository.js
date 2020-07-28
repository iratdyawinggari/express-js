import {getRepository} from 'typeorm'
import SlotStatus from '../models/slotStatus.model'

export default class SlotStatusRepository{
    slotStatusRepository(){
        return getRepository(SlotStatus)
    }

    async findOne(id){
        const slotStatus = await this.slotStatusRepository().find({where:{id:id}})
        return slotStatus
    }
    
}