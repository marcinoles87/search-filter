import React, { useState } from 'react'
import JSONDATA from '../Data.json'

import './search.css'



const Search = () => {

    let [text,handleText] = useState('');

    handleText = (e) => {
        let word = e.target.value
        console.log(word)

    }

    return ( 
        <div className='search-wrapper'>
            <input onChange={handleText} placeholder="search tag..."></input>
            {JSONDATA.map((val,key)=>{
                return <div>
                    <li key={key.nick}>Name: {val.name} nick :{val.nick}</li></div>

            })}
        </div>
     );
}
 
export default Search;