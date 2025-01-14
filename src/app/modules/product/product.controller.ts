import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProdcutIntoDB(req.files, req.body)

  sendResponse(res, {
    status: 200,
    success: true,
    message: 'Created a product successfully',
    data: result
  })
})

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB()

  sendResponse(res, {
    status: 200,
    success: true,
    message: 'All Products is retrived successfully',
    data: result
  })
})

export const ProductContollers = {
  createProduct,
  getAllProducts
}
