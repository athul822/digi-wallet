import React from 'react'
import './HeaderBar.scss'
import SearchIcon from './SearchIcon'

const SearchBox = () => {
  return (
    <div className='search-box-container'>
        <input type="text" />
        <div className='search-icon-container'>
            <SearchIcon />
        </div>
    </div>
  )
}

export default SearchBox