import express from 'express'
import { CategoryRoutes } from '../modules/category/category.route'
import { ProductRoutes } from '../modules/product/prodcuct.route'
const routers = express.Router()

const moduleRoutes = [
  {
    path: '/category',
    route: CategoryRoutes
  },
  {
    path: '/product',
    route: ProductRoutes
  }
]

moduleRoutes.forEach(route => {
  routers.use(route.path, route.route)
})

export default routers
