import React, { useState } from 'react'
import JSONDATA from '../Data.json'

import './search.css'



const Search = () => {

    let [text,handleText] = useState('');

    handleText = (e) => {
        let word = e.target.value
        text = word
        console.log(text)
        if(word === text) {
            return text
        }

    }

    return ( 
        <div className='search-wrapper'>
            <input onChange={handleText} placeholder="search tag..." ></input>
            {JSONDATA.map((val,index)=>{
                return <div>
                    {text}
                    <li key={index.id}>Name: {val.name} nick :{val.nick}</li></div>
                        
            })}
        </div>
     );
}
 
export default Search;