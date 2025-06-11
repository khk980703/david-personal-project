import connection from './connection'
import { Product } from '../../models/products'

export async function getAllProducts(db = connection) {
  return (await db('products').select()) as Product[]
}

export async function getProductById(id: number, db = connection) {
  return (await db('products').where({ id }).first()) as Product
}
