import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <div className="header-logo">
          <h1>
            <span style={{ color: 'rgb(108, 108, 108)' }}>tread</span>
            <span style={{ color: 'rgb(167, 167, 167)' }}>me</span>
          </h1>
          <img
            src="/images/treadme-logo-red-eye.png"
            alt="Buff Kiwi Logo"
            className="logo"
          />
        </div>
      </Link>
    </header>
  )
}
