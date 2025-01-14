/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from '../../errors/AppError'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { TImageAsset } from '../category/category.interface'
import { Category } from '../category/category.model'
import { Product } from './prodcut.model'
import { TImages, TProduct } from './product.interface'

const getAllProductsFromDB = async () => {
  const result = await Product.find().populate('category', 'name')
  return result
}
const createProdcutIntoDB = async (files: any, payload: TProduct) => {
  const isCategoryExist = await Category.findById(payload.category)
  if (!isCategoryExist) {
    throw new AppError(404, 'Category Not Found!')
  }

  const images: TImages = files.image
    ? await Promise.all(
        files.image.map(async (file: Record<string, unknown>) => {
          const randomNumber = Math.round(Math.random() * 1000)
          const fileName = `${payload.name}${randomNumber}`

          const { secure_url, optimizeUrl, public_id } =
            await sendImageToCloudinary(fileName, file.path as string)

          return { secure_url, optimizeUrl, public_id }
        })
      )
    : []

  const videoFile = files.video
    ? await sendImageToCloudinary(payload.name, files.video[0].path, 'video')
    : null

  const video: Partial<TImageAsset> = {}
  if (videoFile) {
    video.secure_url = videoFile.secure_url as string
    video.optimizeUrl = videoFile.optimizeUrl as string
    video.public_id = videoFile.public_id as string
  }

  payload.images = images
  payload.video = video

  const result = await Product.create(payload)
  return result
}

export const ProductServices = {
  createProdcutIntoDB,
  getAllProductsFromDB
}
