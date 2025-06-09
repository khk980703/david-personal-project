import { useParams } from 'react-router'

export default function HomeProductCard({ product }) {
  const { id } = useParams()

  return (
    <div className="product-card">
      <p>Name: {product.name}</p>
      <img
        src={product.imgUrl}
        alt="treadmill example"
        className="example-image"
      />
      <p>Price: ${product.price}</p>
    </div>
  )
}
