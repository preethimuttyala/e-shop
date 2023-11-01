import React, { useState,useEffect } from 'react';
import SearchBox from './SearchBox';


function ProductView  (props)  {
  const handleAddToCart=()=>{
    props.addTocart(props.product);
  };

   
    return(
  
         <div className='d-flex justify-content-center align-items-center'>
            <div className="card h-80 ">
    <img src={props.product.image} className="card-img-top img-fluid" alt="..." style={{width:"200px",height:"200px"}} />
    <div className="card-body">
      <h5 className="card-title text-center">{props.product.title.slice(0,15)}{}</h5>
     
      <form className="form-inline d-flex px-2 ms-4">

        
    </form>
      <button className="btn btn-primary justify-content-center" onClick={handleAddToCart} >
        Add To Cart
      </button>
    </div>
  </div>
         </div>
  
        
        
    )
   
};
{/* <SearchBox /> */}

export default ProductView;