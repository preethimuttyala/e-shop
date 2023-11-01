import React, { useReducer } from 'react';
 const initialState={
    cart:[],
    totalQty:0,
 };
function reducer(state,action){
    switch(action.type){
        case 'DELETE_CART':
            return {...state, cart:[]};
        case 'CLEAR_CART':
            return {...state, cart:[], totalQty:0};    
            case 'CHECK_OUT':
                return {...state,};
                default :
                return state;
    }

   
}
    
    

function ClearCart () {
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <>
        <input/>
        <button className='btn btn-danger' onClick={()=> dispatch({type:'DELETE_CART'})}>Delete</button>
        <button className='btn btn-warning'onClick={()=> dispatch({type:'CLEAR_CART'})}>Clear Cart</button>
        <button className='btn btn-primary'onClick={()=> dispatch({type:'CHECK_OUT'})}>Check Out</button>
        
        </>


    
    );
};

export default ClearCart;