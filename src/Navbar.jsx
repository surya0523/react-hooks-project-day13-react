import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['useCounter','/counter'],
  ['useToggle','/toggle'],
  ['useLocalStorage','/localstorage'],
  ['useFetch','/fetch'],
  ['useInput','/input'],
  ['useDebounce','/debounce'],
  ['usePrevious','/previous'],
  ['useHover','/hover'],
  ['useTitle','/title'],
  ['useTimeout','/timeout'],
  ['useClipboard','/clipboard'],
  ['useMediaQuery','/mediaquery'],
  ['useOnlineStatus','/onlinestatus'],
  ['useGeolocation','/geolocation'],
  ['useTheme','/theme'],
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">React Custom Hooks</div>
      <ul>
        {links.map(([label, to]) => (
          <li key={to}>
            <NavLink to={to} className={({isActive}) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
