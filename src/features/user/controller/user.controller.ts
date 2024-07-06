import { Request, Response } from 'express'
import prisma from '~/db'
import { HTTPS_STATUS } from '~/globals/contants/http'
class UserController {
  public async createUser(req: Request, res: Response) {
    const { email, password, firstName, lastName, avatar } = req.body
    const createdUser = await prisma.user.create({ data: { email, password, firstName, lastName, avatar } })
    res.status(HTTPS_STATUS.CREATED).json({ message: 'User successfully created', data: createdUser })
  }
}

export const userController: UserController = new UserController()
