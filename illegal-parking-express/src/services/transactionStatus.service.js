import TransactionStatusRepository from '../repository/transactionStatus.repository'

export default class TransactionStatusService {
    async getTransactionStatusById(id) {
        return await new TransactionStatusRepository().findOne(id);
    }
}