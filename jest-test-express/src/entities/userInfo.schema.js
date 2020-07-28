import { EntitySchema } from 'typeorm'

const UserInfoSchema = new EntitySchema({
    name: 'UserInfo',
    target: 'UserInfo',
    tableName: 'master_user_info',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        userFullName: {
            name: 'user_full_name',
            type: 'varchar'
        }
    },
    relations: {
        user: {
            target: 'User',
            type: 'one-to-one',
            inverseSide: 'userInfo'
        }
    }
})

export default UserInfoSchema