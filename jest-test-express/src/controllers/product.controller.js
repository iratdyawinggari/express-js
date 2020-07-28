import { logEventError } from '../events/logging.event'
import ProductService from '../services/product.service'

const productService = new ProductService()

export const getListProduct = async (req, res) => {
    try {
        const rows = await productService.getProduct()
        return res.status(200).json(rows)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}

export const getListProductWithCategory = async (req, res) => {
    try {
        const rows = await productService.getAllProductCategory()
        return res.status(200).json(rows)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = { ...req.body }
        const result = await productService.createProduct(product)
        return res.status(200).json(result)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}