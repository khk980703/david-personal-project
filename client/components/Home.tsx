import { useRef } from 'react'
import HomeProductCard from './HomeProductCard'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../apis/products'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 100

  const query = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  })

  const { data, isPending, isError } = query

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

        <div ref={containerRef} className="container-inside">
          {data?.map((e, i) => (
            <Link key={i} to={`/product/${e.id}`}>
              <HomeProductCard product={e} />
            </Link>
          ))}
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
