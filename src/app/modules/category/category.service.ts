/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCategory, TImageAsset } from './category.interface'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { Category } from './category.model'

const getAllCategoriesFromDB = async () => {
  const result = await Category.find()
  return result
}

const createCategoryIntoDB = async (file: any, payload: TCategory) => {
  const path = file?.path
  const { optimizeUrl, secure_url, public_id } = await sendImageToCloudinary(
    payload.name,
    path
  )
  const image = {
    optimizeUrl,
    secure_url,
    public_id
  } as TImageAsset
  payload.image = image

  const result = await Category.create(payload)

  return result
}

export const CategoryService = {
  createCategoryIntoDB,
  getAllCategoriesFromDB
}
