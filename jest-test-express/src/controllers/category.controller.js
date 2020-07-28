import CategoryService from '../services/category.service'
import { logEventError } from '../events/logging.event'
import CategoryRepository from '../repository/category-repository'

const categoryRepository = new CategoryRepository()
export const getListCategory = async (req, res, categoryService) => {
    try {
        const rows = await categoryService.setRepository(categoryRepository).getAllCategory()
        return res.status(200).json(rows)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}

export const getListCategoryById = async (req, res, categoryService) => {
    try {
        const rows = await categoryService.setRepository(categoryRepository).getCategoryById(req.query.id)
        return res.status(200).json(rows)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}

export const getListCategoryWithProduct = async (req, res, categoryService) => {
    try {
        const rows = await categoryService.setRepository(categoryRepository).getAllCategoryProduct()
        return res.status(200).json(rows)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}

export const createCategory = async (req, res, categoryService) => {
    try {
        const category = { ...req.body }
        console.log(category)
        const result = await categoryService.setRepository(categoryRepository).createCategory(category)
        return res.status(200).json(result)
    } catch (error) {
        logEventError.emit('CONTROLLER', error, res)
    }
}