import {EntitySchema} from 'typeorm';
import UserInfo from '../models/userInfo.model'

const UserInfoSchema = new EntitySchema({
    name:'UserInfo',
    target:UserInfo,
    tableName: 'ms_user_info',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        address:{
            name:'address',
            type: 'varchar'
        },
        email:{
            name:'email',
            type: 'varchar'
        }
    },
    relations: {
        user:{
            target:'User',
            type:'one-to-one',
            // inverseSide:'userInfo',
            // eager:true,
            joinColumn:{name:'id'}
        }
    }
})

export default UserInfoSchema;