import mongoose from 'mongoose'
import { TImageAsset } from '../category/category.interface'

export type TImages = {
  public_id: string
  secure_url: string
  optimizeUrl: string
}[]

export type TProduct = {
  name: string
  description: string
  images: TImages
  category: mongoose.Types.ObjectId
  status: boolean
  video?: Partial<TImageAsset>
  price: string
}
