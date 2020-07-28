import {EntitySchema} from 'typeorm';
import TransactionStatus from '../models/transactionStatus.model'

const TransactioStatusSchema = new EntitySchema({
    name:'TransactionStatus',
    target:TransactionStatus,
    tableName: 'master_trx_status',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        status:{
            name:'status',
            type: 'varchar'
        }
    }
    // relations: {
    //     transaction:{
    //         target:'Transaction',
    //         type:'one-to-many',
    //         inverseSide:'transactionStatus'
    //     }
    // }
})

export default TransactioStatusSchema;