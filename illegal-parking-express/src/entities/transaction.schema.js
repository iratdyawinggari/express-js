import {EntitySchema} from 'typeorm';
import Transaction from '../models/transaction.model'

const TransactionSchema = new EntitySchema({
    name:'Transaction',
    target:Transaction,
    tableName: 'parking_transaction',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        trxCode:{
            name:'trx_code',
            type: 'varchar'
        },
        // vehicleId:{
        //     name:'vehicle_id',
        //     type: 'int'
        // },
        parkingDate:{
            name:'parking_date',
            type: 'date'
        },
        checkInDate:{
            name:'check_in_date',
            type: 'time'
        },
        checkOutDate:{
            name:'check_out_date',
            type: 'time'
        },
        cost:{
            name:'cost',
            type: 'decimal'
        }
        // parkingAreaId:{
        //     name:'parking_area_id',
        //     type: 'int'
        // },
        // statusTrxId:{
        //     name:'status_trx_id',
        //     type: 'int'
        // }
    },
    relations: {
        transactionStatus: {
            target: 'TransactionStatus',
            type: 'many-to-one',
            eager:true,
            joinColumn: {name: 'status_trx_id'}
        },
        vehicle: {
            target: 'Vehicle',
            type: 'many-to-one',
            eager:true,
            joinColumn: {name: 'vehicle_id'}
        },
        slot: {
            target: 'Slot',
            type: 'many-to-one',
            eager:true,
            joinColumn: {name: 'slot_id'}
        }
    }
})

export default TransactionSchema;