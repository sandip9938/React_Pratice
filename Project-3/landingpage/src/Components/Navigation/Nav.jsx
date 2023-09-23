import React from 'react'

function Nav() {
  return (
    <div>
      <nav>
          <div className="logo">
            <img
              src="./src/assets/logo.webp"
              alt="logo"
              height={50}
              width={100}
            />
          </div>
          <div className="list">
            <ul>
              <li href="#">Home</li>
              <li href="#">Menu</li>
              <li href="#">Service</li>
              <li href="#">Contact</li>
            </ul>
          </div>
          <button>Login</button>
        </nav>
    </div>
  )
}

export default Nav
