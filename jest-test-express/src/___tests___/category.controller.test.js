import { createCategory, getListCategory, getListCategoryWithProduct, getListCategoryById } from '../controllers/category.controller'
import CategoryService from '../services/category.service'

let mockResponse
let mockRequest
let mockRequestId
beforeAll(async () => {
    mockResponse = () => {
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res
    }
    mockRequest = () => {
        const res = {}
        return res
    }
    mockRequestId = () => {
        const res = { query: { id: 1000 } }
        return res
    }
})

describe('Category Controller Test', () => {
    it('should call find all category', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const categoryService = new CategoryService()
        categoryService.getAllCategory = jest.fn(() => [{ id: '1' }])
        await getListCategory(req, res, categoryService)
        expect(res.json).toHaveBeenCalledWith([{ id: '1' }])
        expect(res.status).toHaveBeenCalledWith(200)
    })

    it('should call find all category with product', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const categoryService = new CategoryService()
        categoryService.getAllCategoryProduct = jest.fn(() => [{ id: '1' }])
        await getListCategoryWithProduct(req, res, categoryService)
        expect(res.json).toHaveBeenCalledWith([{ id: '1' }])
        expect(res.status).toHaveBeenCalledWith(200)
    })

    it('should call find category by id', async () => {
        const req = mockRequestId()
        const res = mockResponse()
        const categoryService = new CategoryService()
        categoryService.getCategoryById = jest.fn(() => [{ id: req.query.id }])
        await getListCategoryById(req, res, categoryService)
        expect(res.json).toHaveBeenCalledWith([{ id: req.query.id }])
        expect(res.status).toHaveBeenCalledWith(200)
    })

    it('should call create category', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const categoryService = new CategoryService()
        categoryService.createCategory = jest.fn(() => [{ id: '1' }])
        await createCategory(req, res, categoryService)
        expect(res.json).toHaveBeenCalledWith([{ id: '1' }])
        expect(res.status).toHaveBeenCalledWith(200)
    })
})
