import mongoose from 'mongoose'
import { TCategory, TImageAsset } from './category.interface'

const ImageSchema = new mongoose.Schema<TImageAsset>(
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

const CateroySchema = new mongoose.Schema<TCategory>(
  {
    name: {
      type: String,
      required: [true, 'Categroy name is required!'],
      trim: true,
      unique: true
    },
    image: {
      type: ImageSchema,
      required: [true, 'Categroy image is required!']
    },
    text: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

export const Category = mongoose.model<TCategory>('Category', CateroySchema)
