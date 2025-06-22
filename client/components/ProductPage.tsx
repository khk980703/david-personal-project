import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import { useProductById } from '../hooks/useProductById'

export default function ProductPage() {
  const { id } = useParams()

  const containerRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 100

  const { data: product, isPending, isError } = useProductById(Number(id))

  if (isPending) <p>Loading...</p>
  if (isError) <>Error.</>

  return (
    <div className="main-page">
      <p>Tired of running outside?</p>

      <div className="home-container">
        <div className="home-page-side">
          <Link to={'/'}>
            <button className="treadmill-button">
              <img src="/images/home-icon.png" alt="home icon" />
            </button>
          </Link>
          <button
            className="arrow-btn btn-up"
            onClick={() => {
              containerRef.current?.scrollBy({
                top: -scrollAmount,
                behavior: 'smooth',
              })
            }}
          >
            ⬆︎
          </button>
        </div>

        <div
          ref={containerRef}
          className="container-inside"
          style={{ border: '#2f2f2f 5px solid' }}
        >
          <div className="product-page">
            <h1>{product?.name}</h1>
            <img
              src={product?.imgUrl}
              alt="treadmill example"
              className="example-image"
              style={{ width: '500px' }}
            />
            <p style={{ width: '80%' }}>{product?.description}</p>
            <p>$ {product?.price}</p>
            <div>
              ___________________________________________________________________________________________________________________
            </div>
            <p style={{ marginBottom: '700px' }}>More details below..</p>
            <div>
              ___________________________________________________________________________________________________________________
            </div>
            <p style={{ marginBottom: '700px' }}>Even more details below..</p>
            <div>
              ___________________________________________________________________________________________________________________
            </div>
            <p style={{ marginBottom: '300px' }}>To be continued...</p>
          </div>
        </div>

        <div className="home-page-side">
          <Link to={'/cart'}>
            <button className="treadmill-button">
              <img src="/images/cart-icon.png" alt="cart icon" />
            </button>
          </Link>
          <button
            className="arrow-btn btn-down"
            onClick={() => {
              containerRef.current?.scrollBy({
                top: scrollAmount,
                behavior: 'smooth',
              })
            }}
          >
            ⬇︎
          </button>
        </div>
      </div>
      <div className="buttons">
        <button className="btn-3d green">Go</button>
        <button className="btn-3d red">Stop</button>
      </div>
    </div>
  )
}
