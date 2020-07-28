import { EntitySchema } from 'typeorm'

const UserSchema = new EntitySchema({
    name: 'User',
    target: 'User',
    tableName: 'master_user',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        username: {
            type: 'varchar'
        },
        password: {
            type: 'varchar'
        }
    },
    relations: {
        userInfo: {
            target: 'UserInfo',
            type: 'one-to-one',
            cascade: true,
            // eager: true,
            joinColumn: { name: 'id' }
        }
    }
})

export default UserSchema