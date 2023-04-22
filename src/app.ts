import express, { Application, Request, Response } from 'express'

import userRouter from './routes/user.routes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)

app.use('/', (req: Request, res: Response): void => {
  res.json({ message: 'Hello! Catch-all route.' })
})

export default app
