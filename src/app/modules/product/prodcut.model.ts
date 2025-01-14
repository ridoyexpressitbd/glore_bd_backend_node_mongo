import mongoose from 'mongoose'
import { TProduct } from './product.interface'
import { TImageAsset } from '../category/category.interface'

const ImagesSchema = new mongoose.Schema<TImageAsset>(
  {
    public_id: {
      type: String,
      required: true
    },
    secure_url: {
      type: String,
      required: true
    },
    optimizeUrl: {
      type: String,
      required: true
    }
  },
  {
    _id: false
  }
)
const VideoSchema = new mongoose.Schema<TImageAsset>(
  {
    public_id: {
      type: String,
      required: true
    },
    secure_url: {
      type: String,
      required: true
    }
  },
  {
    _id: false
  }
)
const ProductSchema = new mongoose.Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Short Description is required'],
      trim: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Categroy is required'],
      ref: 'Category'
    },
    images: {
      type: [ImagesSchema],
      required: [true, 'Image is required']
    },
    video: {
      type: VideoSchema
    },
    status: {
      type: Boolean,
      default: true
    },
    price: {
      type: String,
      required: [true, 'Price is required']
    }
  },
  {
    timestamps: true
  }
)

export const Product = mongoose.model<TProduct>('Prodcut', ProductSchema)
