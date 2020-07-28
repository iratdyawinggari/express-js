import TransactionRepository from '../repository/transaction.repository'
import TransactionStatusService from './transactionStatus.service'
import SlotStatusService from './slotStatus.service'
import SlotService from './slot.service'

export default class TransactionService {
    async getTransactionById(id) {
        return await new TransactionRepository().findOne(id);
    }

    async getReport(){
        return await new TransactionRepository().report()
    }

    //check-in
    async createTransaction(transaction) {
        console.log(transaction.slot.slotStatus.id)
        if(transaction.slot.slotStatus.id===1){
            transaction.checkInDate=new Date().toTimeString().substring(0,8)
            transaction.parkingDate=new Date().toISOString().slice(0,10)
            const slotStatus = await new SlotStatusService().getSlotStatusById(2)
            transaction.slot.slotStatus=slotStatus[0]
            const slot = await new SlotService().updateSlot(transaction.slot)
            console.log(transaction.slot)
            return await new TransactionRepository().createTransaction(transaction)
        }else{
            const result = {"message":"slot fulfilled"}
            return result
        }
    }

    async getAllTransaction() {
        return await new TransactionRepository().findAllTransaction()
    }

    diffInSeconds(dateOut,dateIn) {
        const dOut = dateOut.split(':');
        const dIn = dateIn.split(':');
        const dOutInSecond= dOut[0]*3600 + dOut[1]*60 + (+dOut[2] || 0);
        const dInSecond= dIn[0]*3600 + dIn[1]*60 + (+dIn[2] || 0);
        return dOutInSecond-dInSecond;
    }

    //check-out
    async doneTransaction(transaction){
        const transactionDone = await this.getTransactionById(transaction.id)
        if(transactionDone[0].transactionStatus.id === 1){
            const transactionStatus = await new TransactionStatusService().getTransactionStatusById(2)
            console.log(transactionDone[0].slot.slotStatus)     
            transactionDone[0].transactionStatus=transactionStatus[0]
            const slotStatus = await new SlotStatusService().getSlotStatusById(1)
            // console.log(transactionDone[0].slot.slotStatus)
            transactionDone[0].slot.slotStatus=slotStatus[0]
            const slot = await new SlotService().updateSlot(transactionDone[0].slot)
            transactionDone[0].checkOutDate= new Date().toTimeString().substring(0,8)
            const timeDifference = this.diffInSeconds(transactionDone[0].checkOutDate, transactionDone[0].checkInDate);
            const hourDiff=Math.ceil(timeDifference/(3600))
            transactionDone[0].cost=3000
            if(hourDiff>2){
                for (var i = 2; i < hourDiff; i++) {
                    transactionDone[0].cost+=15000
                }
            }    
            await new SlotService().updateSlot(transactionDone[0].slot)
            return await new TransactionRepository().transactionDone(transactionDone[0])
        }else{
            const result = {"message":"transaction already done"}
            return result
        }
    }
}
