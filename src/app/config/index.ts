import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), '.env') })

// Export configuration settings from environment variables
export default {
  NODE_ENV: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 5000,
  mongodb_database_url: process.env.MONGODB_DATABASE_URL,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUDE_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
}
