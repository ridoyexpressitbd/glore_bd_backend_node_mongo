import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CategoryService } from './category.service'

const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategoriesFromDB()

  sendResponse(res, {
    status: 200,
    success: true,
    message: 'Categroies is retrieved Successfully',
    data: result
  })
})

const createCetegory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategoryIntoDB(req.file, req.body)

  sendResponse(res, {
    status: 200,
    success: true,
    message: 'Category Created Successfully',
    data: result
  })
})

export const CategoryControllers = {
  createCetegory,
  getAllCategories
}
