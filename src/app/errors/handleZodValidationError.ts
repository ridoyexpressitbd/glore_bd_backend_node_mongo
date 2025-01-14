import { ZodError, ZodIssue } from 'zod'
import { TGenericErrorResponse } from '../interface/errors'

const handleZodValidationError = (error: ZodError): TGenericErrorResponse => {
  const errorSources = error.issues.map((issues: ZodIssue) => {
    return {
      path: issues?.path[issues.path.length - 1],
      message: issues?.message
    }
  })

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorSources
  }
}

export default handleZodValidationError
