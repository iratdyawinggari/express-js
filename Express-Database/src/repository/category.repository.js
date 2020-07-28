import {getRepository} from 'typeorm'
import Category from '../models/category.model'

export default class CategoryRepository{
    categoryRepository(){
        return getRepository(Category)
    }

    async findOne(id){
        const category = await this.categoryRepository().find({where:{id:id}},{relations:['product']})
        return category
    }

    async findAllCategory(){
        const category = await this.categoryRepository().find()
        return category
    }

    async findAllCategoryProduct(){
        const category = await this.categoryRepository().find({relations:['product']})
        return category
    }

    async createCategory(category){
        return await this.categoryRepository().save(category)
    }    
}