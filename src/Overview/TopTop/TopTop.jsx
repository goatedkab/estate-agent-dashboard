import React from 'react'
import './TopTop.css'
import SearchBar from './SearchBar/SearchBar'
import SearchBox from './SearchBox/SearchBox'
// import SearchContents from './SearchContents/SearchContents'

const TopTop = () => {
  return (
    <div className='TopTop'>
        <div className='welcome-text'>
          {/* <p>Hello Morris, Welcome back!</p> */}
          <h1>Your dashboard</h1>
        </div>
        <SearchBox/>
    </div>
  )
}

export default TopTop
