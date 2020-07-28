import ProductRepository from '../repository/product.repository'
import CategoryRepository from '../repository/category.repository'
import StatusRepository from '../repository/status.repository'

export default class ProductService {
    async getProductById(id) {
        return await new ProductRepository().findOne(id);
    }

    async createProduct(product) {
        return await new ProductRepository().createProduct(product)
    }

    async getAllProduct() {
        return await new ProductRepository().findAllProduct()
    }

    async deleteProduct(product) {
        const productDelete = this.getProductById(product.id);
        if(productDelete.length>0){
            await new ProductRepository().deleteProduct(product)
            return this.getProductById(product.id)
        }else{
            const result ={"message":"product not found"}
            return result
        }

    }
    
    async updateProduct(product) {
        const category = await new CategoryRepository().findCategoryById(product.categoryId)
        const productUpdate = await new ProductRepository().findProductById(product.id)
        if (category.length > 0 ) {
            if(productUpdate.length>0){
                await new ProductRepository().updateProduct(product)
                return this.getProductById(product.id)
            }else{
                const result={"message": "product not found"}
                return result;
            }
        } else {
            const result={"message": "category not found"}
            return result;
        }
    }
}