export interface Product {
  name: string
  imgUrl: string
  price: number
  description: string
}

export interface ProductData extends Product {
  id: number
}
