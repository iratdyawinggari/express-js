import {EntitySchema} from 'typeorm';
import User from '../models/user.model'

const UserSchema = new EntitySchema({
    name:'User',
    target:User,
    tableName: 'ms_user',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        username:{
            name:'username',
            type: 'varchar'
        },
        password:{
            name:'password',
            type: 'varchar'
        }
    },
    relations: {
        userInfo:{
            target:'UserInfo',
            type:'one-to-one',
            inverseSide:'user',
            // cascade:true,
            eager: true

        }
    }
})

export default UserSchema;