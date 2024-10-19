import express from 'express'
import { clerkWebhoks } from '../controllers/UserController.js'

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhoks)

export default userRouter