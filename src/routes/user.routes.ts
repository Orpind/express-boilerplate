import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response): void => {
  const users: string[] = ['John Doe', 'Jane Doe', 'John Smith']
  res.status(200).json(users)
})

export default router
