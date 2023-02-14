import React from 'react'
import JSONDATA from '../Data.json'


const Search = () => {
    return ( 
        <div>
            <input  placeholder="search tag..."></input>
            {JSONDATA.map((val,key)=>{
                return <div>
                    <li key={val.nick}>Name: {val.name} nick :{val.nick}</li></div>

            })}
        </div>
     );
}
 
export default Search;