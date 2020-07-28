import SlotStatusRepository from '../repository/slotStatus.repository'

export default class SlotStatusService {
    async getSlotStatusById(id) {
        return await new SlotStatusRepository().findOne(id);
    }
}