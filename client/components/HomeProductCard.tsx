export default function HomeProductCard({ product }) {
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
