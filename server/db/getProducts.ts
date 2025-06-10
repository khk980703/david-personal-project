import { Product } from '../../models/products'
import connection from './connection'

export async function getAllProducts(db = connection) {
  return (await db('products').select()) as Product[]
}
