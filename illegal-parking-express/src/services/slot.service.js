import SlotRepository from '../repository/slot.repository'


export default class SlotService {
    async getSlotById(id) {
        return await new SlotRepository().findOne(id);
    }

    async createSlot(amount) {
        var slots=[]
        for(var i = 0;i<amount;i++){
            const slot={    
                "slotId": "SLOT"+(i+1),
                "slotStatus": {
                    "id": 1,
                    "status": "empty"
                }
            }
            slots= [...slots, slot]
            await new SlotRepository().createSlot(slot)
        }
        return slots
    }

    async getAllSlot() {
        return await new SlotRepository().findAllSlot()
    }
   
    async updateSlot(slot){
        return await new SlotRepository().updateSlot(slot)
    }
}