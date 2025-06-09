import { useRef } from 'react'
import HomeProductCard from './HomeProductCard'
import { exampleData } from './exampleData'
import { Link } from 'react-router'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 100
  const exampleArr = Array(20).fill(null)

  return (
    <div className="main-page">
      <p>Tired of running outside?</p>

      <div className="home-container">
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
        <div ref={containerRef} className="container-inside">
          {exampleArr.map((e, i) => (
            <Link key={i} to={`/product/${exampleData.id}`}>
              <HomeProductCard product={exampleData} />
            </Link>
          ))}
        </div>
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
      <div className="buttons">
        <button className="btn-3d green">Go</button>
        <button className="btn-3d red">Stop</button>
      </div>
    </div>
  )
}
