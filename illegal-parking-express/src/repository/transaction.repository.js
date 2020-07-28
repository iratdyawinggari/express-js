import {getRepository} from 'typeorm'
import Transaction from '../models/transaction.model'
import TransactionStatusRepository from './transactionStatus.repository'
import ParkingRepository from './slot.repository'
import TransactionStatusService from '../services/transactionStatus.service'


export default class TransactionRepository{
    transactionRepository(){
        return getRepository(Transaction)
    }

      async report() {
        const result = await this.transactionRepository()
          .createQueryBuilder("transaction")
          .select("transaction.parkingDate","trxDate")
          .addSelect("sum(transaction.cost)", "sum")
          .addGroupBy("transaction.parkingDate")
          .getRawMany();
        console.log(result);
        return result;
      }

    async findOne(id){
        const transaction = await this.transactionRepository().find({where: {id: id}})
        return transaction
    }

    async findAllTransaction(){
        const transaction = await this.transactionRepository().find({relations: ['vehicle']})
        return transaction
    }

    async transactionDone(transaction){
        console.log(transaction)

        const dfvf=await this.transactionRepository().save(transaction)
        console.log(dfvf)
    }

    async updateTransaction(transaction){
        return await this.transactionRepository().save(transaction)
    }

    async createTransaction(transaction){
        return await this.transactionRepository().save(transaction)
    }    
}