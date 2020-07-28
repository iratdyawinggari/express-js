import {EntitySchema} from 'typeorm';
import Slot from '../models/slot.model'

const SlotSchema = new EntitySchema({
    name:'Slot',
    target:Slot,
    tableName: 'master_slot',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        slotId:{
            name:'slot_id',
            type: 'varchar'
        }
    },
    relations: {
        slotStatus:{
            target:'SlotStatus',
            type:'many-to-one',
            eager:true,
            joinColumn:{name:'slot_status_id'}
        }
    }
})

export default SlotSchema;