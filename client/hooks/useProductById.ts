import { useQuery } from '@tanstack/react-query'
import { getProductById } from '../apis/products'

export function useProductById(id: number) {
  const query = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  })
  return {
    ...query,
  }
}
