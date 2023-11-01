import React from 'react';
import { useState,useEffect } from 'react';

function SearchBox ({onSearch}){
    const[searchInput,setSearchInput]= useState("");
    const handleInputChange =(e)=>{
      const inputValue = e.target.value;
      setSearchInput(inputValue);
      onSearch(searchInput);
    };
    const handleSearch =()=>{
      onSearch(searchInput);
    };
return(
    <div className='d-flex'>

      <input className='form-control' type='search' placeholder='search' aria-label='search' value={searchInput} onChange={handleInputChange}/>
      <button className='btn btn-success me-2' onClick={handleSearch}>Submit</button>
    </div>
    
         

  
)
}

   

export default SearchBox;