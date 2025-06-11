import request from 'superagent'
import { Product } from '../../models/products'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getProducts() {
  const response = await request.get(`${rootURL}/products`)
  return response.body as Product[]
}

export async function getProductById(id: number) {
  const response = await request.get(`${rootURL}/products/${id}`)
  return response.body as Product
}
