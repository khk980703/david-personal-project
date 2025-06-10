import { Router } from 'express'

import * as db from '../db/getProducts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await db.getAllProducts()
    res.json({ products })
  } catch (error) {
    res.sendStatus(500).json({ message: 'Failed to getAllProducts' })
  }
})

export default router
