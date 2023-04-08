import React from 'react'
import { useState } from 'react'
import './SearchBox.css'
import { UilSearch } from '@iconscout/react-unicons'

var data = require("./MOCK_DATA.json")

const SearchBox = () => {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm)
        //api to fetch search results
        console.log('search', searchTerm)
    }


    return (
        <div>
            <div className='search-container'>
                <div className='search-inner'>
                    <input type="text" placeholder="Search" value={value} onChange={onChange} />
                    <button onClick={() => onSearch(value)}><UilSearch/></button>
                </div>
                <div className='dropdown'>
                    {data.filter(item => { 
                        const searchTerm = value.toLocaleLowerCase();
                        const fullName = item.full_name.toLocaleLowerCase();
                        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm //return true if search term exists and its there
                    }).slice(0,10).map((item) => (
                    <div onClick={() => onSearch(item.full_name)} 
                    className="dropdown-row" 
                    key={item.full_name}>
                        {item.full_name}
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}


export default SearchBox
