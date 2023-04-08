import React from 'react'
import './SearchBar.css'

const SearchBar = ({keyword, onChange}) => {
  return (
    <input 
    className='Bar'
    //  style={BarStyle}
     key="search-bar"
     value={keyword}
     placeholder={"Search"}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
