import { NextFunction, Request, Response } from 'express'
import prisma from '~/db'
import { HTTPS_STATUS } from '~/globals/contants/http'
import { BadRequestException } from '~/globals/middlewares/error.middleware'
import { catchAsync } from '~/utils/utils'

class AuthController {
  public registerUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, firstName, lastName, avatar } = req.body
    if (email === 'dsf@gmail.com') {
      throw new BadRequestException('Email already used')
    }
    const createdUser = await prisma.user.create({
      data: { email, password, firstName, lastName, avatar }
    })
    res.status(HTTPS_STATUS.CREATED).json({
      message: 'User successfully created',
      data: createdUser
    })
  })
}

export const authController = new AuthController()
