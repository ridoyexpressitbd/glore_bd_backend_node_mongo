import express from 'express'
import { CategoryControllers } from './category.controller'
import { upload } from '../../utils/sendImageToCloudinary'
import dataSetToReqBody from '../../middlewares/inputDataSetToReq.body'
import validateRequest from '../../middlewares/validateRequest'
import { CategoryValidation } from './category.validationZodSchema'

const router = express.Router()

router.post(
  '/addcategory',
  upload.single('image'),
  dataSetToReqBody,
  validateRequest(CategoryValidation.createCategoryValidationZodSchema),
  CategoryControllers.createCetegory
)
router.get('/', CategoryControllers.getAllCategories)

export const CategoryRoutes = router
