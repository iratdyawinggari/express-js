import UserRepository from '../repository/user.repository'

export default class UserService {
    async getUserById(id) {
        return await new UserRepository().findOne(id);
    }

    async createUser(User) {
        return await new UserRepository().createUser(User)
    }

    async getAllUser() {
        return await new UserRepository().findAllUser()
    }

    
    // async updateUser(User) {
    //     const category = await new CategoryRepository().findCategoryById(User.categoryId)
    //     const UserUpdate = await new UserRepository().findUserById(User.id)
    //     if (category.length > 0 ) {
    //         if(UserUpdate.length>0){
    //             await new UserRepository().updateUser(User)
    //             return this.getUserById(User.id)
    //         }else{
    //             const result={"message": "User not found"}
    //             return result;
    //         }
    //     } else {
    //         const result={"message": "category not found"}
    //         return result;
    //     }
    // }
}