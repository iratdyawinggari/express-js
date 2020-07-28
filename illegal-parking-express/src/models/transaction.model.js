export default class Transaction {
    constructor(id, trxCode, vehicleId,parkingDate, checkInDate, checkOutDate, cost,slotId,statusTrxId){
        this.id=id;
        this.trxCode=trxCode
        this.vehicleId=vehicleId
        this.parkingDate=parkingDate
        this.checkInDate=checkInDate
        this.checkOutDate=checkOutDate
        this.cost=cost
        this.slotId=slotId
        this.statusTrxId=statusTrxId
    }
}