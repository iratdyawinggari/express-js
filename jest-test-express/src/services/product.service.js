import ProductRepository from '../repository/product-repository'
import CategoryRepository from '../repository/category-repository'

export default class ProductService {
    async getProductById(id) {
        return await new ProductRepository().findOne(id);
    }

    async getProduct() {
        return await new ProductRepository().findAllProduct();
    }
    async createProduct(product) {
        return await new ProductRepository().createProduct(product)
    }
    async getAllProductCategory() {
        return await new ProductRepository().findAllProductCategory()
    }
    async softDeleteProduct(product) {
        await new ProductRepository().softDeleteProduct(product)
        return this.getProductById(product.id)

    }
    async updateProduct(product) {
        const category = await new CategoryRepository().findCategoryById(product.categoryId)
        if (category.length > 0) {
            await new ProductRepository().updateProduct(product)
            return this.getProductById(product.id)
        } else {
            return null
        }
    }
}