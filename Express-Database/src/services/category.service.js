import CategoryRepository from '../repository/Category.repository'
import StatusRepository from '../repository/status.repository'

export default class CategoryService {
    async getCategoryById(id) {
        return await new CategoryRepository().findCategoryById(id);
    }

    async createCategory(category) {
        const status = await new StatusRepository().findStatusById(category.statusId)
        if (status.length>0) {
            const result = await new CategoryRepository().createCategory(category)
            const newId = result.insertId
            return await this.getCategoryById(newId)
        } else {
            const result ={"message":"status not found"}
            return result
        }
    }

    async getAllCategory() {
        return await new CategoryRepository().findAllCategory()
    }

    async deleteCategory(category) {
        const categoryDelete = this.getCategoryById(category.id);
        if(categoryDelete.length>0){
            await new CategoryRepository().deleteCategory(category)
            return this.getCategoryById(category.id)
        }else{
            const result ={"message":"category not found"}
            return result
        }
    }

    async updateCategory(category) {
        const status = await new StatusRepository().findStatusById(category.statusId)
        if (status.length>0) {
            const categoryUpdate = await this.getCategoryById(category.id);
            if(categoryUpdate.length>0){
                await new CategoryRepository().updateCategory(category)
                return this.getCategoryById(category.id)
            }else{
                const result ={"message":"category not found"}
                return result
            }
        } else {
            const result ={"message":"status not found"}
            return result
        }
    }
}