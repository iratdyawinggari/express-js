export default class CategoryService {

    setRepository(repo) {
        this.repo = repo
        return this
    }
    getAllCategory() {
        return this.repo.findAllCategory()
        // return await new CategoryRepository().findAllCategory()
    }
    getAllCategoryProduct() {
        return this.repo.findAllCategoryProduct()
        // return await new CategoryRepository().findAllCategoryProduct()
    }
    getCategoryById(id) {
        return this.repo.findCategoryById(id)
        // return await new CategoryRepository().findCategoryById(id)
    }
    createCategory(category) {
        return this.repo.createCategory(category)
        // const result = await new CategoryRepository().createCategory(category)
        // const id = result.insertId
        // return await this.getCategoryById(id)
    }
}