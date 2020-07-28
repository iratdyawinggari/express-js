import {getRepository} from 'typeorm'
import User from '../models/user.model'

export default class UserRepository{
    userRepository(){
        return getRepository(User)
    }

    async findOne(id){
        const user = await this.userRepository().find({where:{id:id}},{relations:['userInfo']})
        return user
    }

    async findAllUser(){
        const user = await this.userRepository().find()
        return user
    }

    async findAllUserUserInfo(){
        const user = await this.userRepository().find({relations:['userInfo']})
        return user
    }

    async createUser(user){
        return await this.userRepository().save(user)
    }    
}