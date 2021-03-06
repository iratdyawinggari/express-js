import {EntitySchema} from 'typeorm';
import Status from '../models/status.model'

const StatusSchema = new EntitySchema({
    name:'Status',
    target:Status,
    tableName: 'ms_status',
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
    },
    relations: {
        product:{
            target:'Product',
            type:'one-to-many',
            inverseSide:'status'
        },
        category:{
            target:'Category',
            type:'one-to-many',
            inverseSide:'status'
        }
    }
})

export default StatusSchema;