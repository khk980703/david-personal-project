import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../apis/products'

export function useProducts() {
  return useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  })
}
