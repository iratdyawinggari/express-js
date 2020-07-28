import {getRepository} from 'typeorm'
import UserInfo from '../models/userInfo.model'

export default class UserInfoRepository{
    userInfoRepository(){
        return getRepository(UserInfo)
    }

    async findOne(id){
        const userInfo = await this.userInfoRepository().find({where:{id:id}},{relations:['user']})
        return userInfo
    }

    async findAllUserInfo(){
        const user = await this.userInfoRepository().find()
        return user
    }

}