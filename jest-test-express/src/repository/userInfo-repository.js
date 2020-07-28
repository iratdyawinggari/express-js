import { getRepository } from 'typeorm'
import UserInfo from '../entities/userInfo.schema'

export default class UserInfoRepository {
    userInfoRepository() {
        return getRepository(UserInfo)
    }

    async findAllUserInfo() {
        const user = await this.userInfoRepository().find({ relations: ['user'] })
        return user
    }
}