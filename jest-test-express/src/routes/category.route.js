import { Router } from 'express'
import { createCategory, getListCategory, getListCategoryWithProduct, getListCategoryById } from '../controllers/category.controller'
import CategoryService from '../services/category.service'

const CategoryRouter = Router()
    .get('/', (req, res) => getListCategory(req, res, new CategoryService()))
    .get('/by-id', (req, res) => getListCategoryById(req, res, new CategoryService()))
    .get('/join', (req, res) => getListCategoryWithProduct(req, res, new CategoryService()))
    .post('/save', (req, res) => createCategory(req, res, new CategoryService()))
export default CategoryRouter