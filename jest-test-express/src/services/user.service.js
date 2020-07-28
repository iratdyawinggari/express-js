import UserRepository from '../repository/user-repository'

export default class UserService {

    async getUser() {
        return await new UserRepository().findAllUser();
    }
}