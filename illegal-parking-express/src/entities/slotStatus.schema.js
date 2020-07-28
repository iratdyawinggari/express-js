import {EntitySchema} from 'typeorm';
import SlotStatus from '../models/slotStatus.model'

const SlotStatusSchema = new EntitySchema({
    name:'SLotStatus',
    target:SlotStatus,
    tableName: 'master_slot_status',
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

export default SlotStatusSchema;