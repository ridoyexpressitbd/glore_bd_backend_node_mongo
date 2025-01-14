import { z } from 'zod'
const createCategoryValidationZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Category Name is Required!'
      })
      .max(100, {
        message: 'Category Name Cannot be more than 100 Characters'
      }),
    text: z.string().optional()
  })
})

export const CategoryValidation = {
  createCategoryValidationZodSchema
}
