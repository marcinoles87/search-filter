import React from 'react'
import JSONDATA from '../Data.json'


const Search = () => {
    return ( 
        <div>
            <input  placeholder="search tag..."></input>
            {JSONDATA.map((val,key)=>{
                return <div> {val.name} </div>

            })}
        </div>
     );
}
 
export default Search;