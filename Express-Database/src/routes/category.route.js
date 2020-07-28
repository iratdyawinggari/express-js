import { Router } from 'express'
import CategoryService from '../services/Category.service'

const CategoryRouter = Router()
    .get('/', async (req, res, next) => {
        const rows = await new CategoryService().getAllCategory()
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const category = { ...req.body }
        const rows = await new CategoryService().createCategory(category)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })
    .get('/id', async (req, res, next) => {
        const rows = await new CategoryService().getCategoryById(Number(req.query.id))
        res.json(rows)
    })
    .post('/update', async (req, res, next) => {
        const category = { ...req.body }
        const rows = await new CategoryService().updateCategory(category)
        if (rows) {
            res.json(rows)
        } else {
            res.json({ message: 'null' })
        }
    })
    .post('/delete', async (req, res, next) => {
        const category = { ...req.body }
        const rows = await new CategoryService().deleteCategory(category)
        res.json(rows)
    })

export default CategoryRouter