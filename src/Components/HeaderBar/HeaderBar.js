import React from 'react'
import BrandLogo from './BrandLogo'
import BrandText from './BrandText'
import './HeaderBar.scss'
import SearchBox from './SearchBox'

const HeaderBar = () => {
  return (
    <div className='header-bar'>
      <div className='brand-logo-container'>
        <BrandLogo />
        <BrandText />
      </div>
      <div className='search-bar-container'>
        <SearchBox />
      </div>  
    </div>
  )
}

export default HeaderBar