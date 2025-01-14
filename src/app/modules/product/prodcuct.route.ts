import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProductValidation } from './product.validationZodSchema'
import { ProductContollers } from './product.controller'
import dataSetToReqBody from '../../middlewares/inputDataSetToReq.body'
import { upload } from '../../utils/sendImageToCloudinary'

const router = express.Router()

router.post(
  '/create-product',
  upload.fields([
    { name: 'image', maxCount: 10 },
    { name: 'video', maxCount: 1 }
  ]),
  dataSetToReqBody,
  validateRequest(ProductValidation.createProductZodValidationSchema),
  ProductContollers.createProduct
)

router.get('/', ProductContollers.getAllProducts)

export const ProductRoutes = router
