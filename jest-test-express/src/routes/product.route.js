import { Router } from 'express'
import { createProduct, getListProduct, getListProductWithCategory } from '../controllers/product.controller'

const ProductRouter = Router()
    .get('/', getListProduct)
    .get('/join', getListProductWithCategory)
    .post('/save', createProduct)

export default ProductRouter