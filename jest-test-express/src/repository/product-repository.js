import { getRepository } from 'typeorm'
import Product from '../entities/product.schema'

export default class ProductRepository {
    productRepository() {
        return getRepository(Product)
    }

    async findOne(id) {
        const product = await this.productRepository().find({ where: { id: id } }, { relations: ['category'] })
        return product
    }

    async findAllProduct() {
        const product = await this.productRepository().find({ relations: ['category'] })
        return product
    }

    async createProduct(product) {
        return await this.productRepository().save(product)
    }
}