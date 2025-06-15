import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Header() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

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
      <IfAuthenticated>
        <button onClick={handleSignOut}>Log Out</button>
        {user && (
          <p style={{ position: 'absolute', left: '65%' }}>
            Signed in as: {user?.nickname}
          </p>
        )}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Log In</button>
      </IfNotAuthenticated>
    </header>
  )
}
