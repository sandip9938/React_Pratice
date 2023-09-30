import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='max-width header'>
<img src="./src/assets/logo.png" className='header-logo' alt="Zomato logo"  />
<div className='header-left'>
    <div className='header-location'>
    <div className='location-wrapper'>
        <div className='location-iconname'>

        </div>
    </div>
    </div>
   
</div>
<div className='header-right'></div>
    </div>
  )
}

export default Header
