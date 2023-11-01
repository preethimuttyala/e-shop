import React from 'react';
import ProductView from './ProductView';

function ProductList (props) {
   
    return (
         <>
        <div className='container mt-5'>
          <div className = 'row g-5'>
        {props.display.map((product)=>{
          return  <div className='col-lg-3'>
                 <ProductView product={product} addTocart = {props.addTocart} />
            </div>
        
         })}
        </div>
        </div>
         </>
    )
};

export default ProductList;