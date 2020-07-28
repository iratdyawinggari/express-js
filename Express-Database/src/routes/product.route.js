import { Router } from 'express'
import ProductService from '../services/product.service'

const ProductRouter = Router()
    .get('/id', async (req, res, next) => {
        const rows = await new ProductService().getProductById(Number(req.query.id))
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const product = { ...req.body }
        const rows = await new ProductService().createProduct(product)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message:'null' })
        }
    })
    .post('/update', async (req, res, next) => {
        const product = { ...req.body }
        const rows = await new ProductService().updateProduct(product)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message:'null' })
        }
    })
    .post('/delete', async (req, res, next) => {
        const product = { ...req.body }
        const rows = await new ProductService().deleteProduct(product)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message:'null' })
        }
    })
    .get('/', async (req, res, next) => {
        const rows = await new ProductService().getAllProduct()
        res.json(rows)
    })

export default ProductRouter