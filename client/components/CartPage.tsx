import { Link } from 'react-router'
import { exampleData } from './exampleData'

export default function CartPage() {
  const arr = Array(3).fill(null)

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {arr.map(() => (
        <div key={exampleData.id} className="each-cart-card">
          {/* <Link to="/"> */}
          <img src={exampleData.imgUrl} alt={exampleData.name} />
          <div>
            <p>{exampleData.name}</p>
            <p>${exampleData.price}</p>
            <p>Quantity: {1}</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button>Delete</button>
          {/* </Link> */}
        </div>
      ))}
      <p>Total: ${2997}</p>
      <Link to={'/payment'}>
        <button>Proceed to Payment</button>
      </Link>
    </div>
  )
}
