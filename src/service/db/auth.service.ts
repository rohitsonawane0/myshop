import { NextFunction, Request, Response } from 'express'
import prisma from '~/db'
import { catchAsync } from '~/utils/utils'

class AuthService {
  public addUser = catchAsync(async (reqBody: any) => {
    const { email, password, firstName, lastName, avatar } = reqBody

    const createdUser = await prisma.user.create({
      data: { email, password, firstName, lastName, avatar }
    })
    return createdUser
  })
}

export const authService = new AuthService()
