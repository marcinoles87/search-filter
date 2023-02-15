import React, { useState } from 'react'
import JSONDATA from '../Data.json'

import './search.css'



const Search = () => {

    let [text,handleText] = useState('');

   
    

    return ( 
        <div className='search-wrapper'>
            <input 
                type={text} 
                onChange={ (e) => 
                    { handleText( e.target.value)}} 
                placeholder="search tag..." ></input>

            {JSONDATA.filter(
                (val) => {
                    if(text == ''){
                        return val
                    } else if( val.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
                        return val
                    }
                }
            ).map((val,index)=>{
               
                return <li key={index}>Name: {val.name} nick :{val.nick} id:{val.id}</li>
                    
                        
            })}
        </div>
     );
}
 
export default Search;