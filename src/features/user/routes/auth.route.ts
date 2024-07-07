import { Router } from 'express'
import { userController } from '../controller/user.controller'
import { validateSchema } from '~/globals/middlewares/validate.middleware'
import { createUserSchema, loginUserSchema } from '../schema/user.schema'
import { authController } from '../controller/auth.controller'

const authRoutes = Router()

authRoutes.post('/register', validateSchema(createUserSchema), authController.registerUser)
authRoutes.post('/login', validateSchema(loginUserSchema), authController.login)

export default authRoutes
