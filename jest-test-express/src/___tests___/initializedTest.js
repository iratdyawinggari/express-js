import ProductSchema from '../entities/product.schema'
import { createConnection, getConnection, getRepository } from 'typeorm'
import UserSchema from '../entities/user.schema'
import UserInfoSchema from '../entities/userInfo.schema'
import CategorySchema from '../entities/category.schema'

export const init = async () => {
    const connection = await createConnection({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        synchronize: true,
        entities: [CategorySchema, ProductSchema, UserSchema, UserInfoSchema]
    })
    await initData();
}

const initData = async () => {
    // await getRepository(UserSchema).save({
    //     id: 1,
    //     username: 'adoel',
    //     password: 'adoel123'
    // })
    await getRepository(CategorySchema).save({
        id: 1,
        categoryId: 'ABC',
        categoryName: 'ABC'
    })
    await getRepository(ProductSchema).save({
        id: 1,
        productId: 'XYZ',
        productName: 'XYZ',
        status: 1
    })
}

export const clearance = () => {
    let conn = getConnection()
    return conn.close()
}

