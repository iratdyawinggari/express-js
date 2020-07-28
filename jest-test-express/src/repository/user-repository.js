import { getRepository } from 'typeorm'
import User from '../entities/user.schema'
import UserInfoRepository from '../repository/userInfo-repository'

export default class UserRepository {
    userRepository() {
        return getRepository(User)
    }

    async findAllUser() {
        const user = await this.userRepository().find()
        return user
    }
}