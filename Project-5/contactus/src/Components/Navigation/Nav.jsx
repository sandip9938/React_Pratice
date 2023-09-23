import React from 'react'

function Nav() {
  return (
    <div>
      <nav>
        <div className='logo'>
<img src="./src/assets/logo.webp" alt="" height={70} width={70} />
        </div>
        <div className='list'>
<ul>
    <li href="#">Home</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
</ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
