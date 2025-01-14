import { z } from 'zod'

const createProductZodValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    category: z.string({ required_error: 'Category is required' }),
    status: z.boolean({ required_error: 'Status is requird' }),
    price: z.string({ required_error: 'Price is required' })
  })
})

export const ProductValidation = {
  createProductZodValidationSchema
}
