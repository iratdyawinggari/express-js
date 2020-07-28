import UserInfoRepository from '../repository/userInfo-repository'

export default class UserInfoService {

    async getUserInfo() {
        return await new UserInfoRepository().findAllUserInfo()
    }
}