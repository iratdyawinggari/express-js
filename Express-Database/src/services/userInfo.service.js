import UserInfoRepository from '../repository/userInfo.repository'

export default class UserInfoService {
    async getUserInfoById(id) {
        return await new UserInfoRepository().findOne(id);
    }

    async createUserInfo(userInfo) {
        return await new UserInfoRepository().createUser(userInfo)
    }

    async getAllUserInfo() {
        return await new UserInfoRepository().findAllUserInfo()
    }

}