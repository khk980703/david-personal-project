export interface ProductData {
  name: string
  imgUrl: string
  price: number
  description: string
}

export interface Product extends ProductData {
  id: number
}
