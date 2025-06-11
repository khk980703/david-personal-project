import { Router } from 'express'

import * as db from '../db/getProducts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await db.getAllProducts()
    res.json(products)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Failed to getAllProducts' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const product = await db.getProductById(id)

    if (!product) res.sendStatus(404)
    res.json(product)
  } catch (error) {
    res.sendStatus(500).json({ message: 'Failed to getProductById' })
  }
})

export default router
