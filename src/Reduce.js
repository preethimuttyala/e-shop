import React, { useReducer } from 'react';


function reducer(state,action){
    if(action.type=="INCREMENT"){
        return{
            item:state.item+1
        };
    }
    throw Error('item not found')
}
   function Reduce () {
    const[state,dispatch]=useReducer(reducer,{item:1})
    return (
        <>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"});
        }}>Add To Cart</button>
        <p>
            Items added {state.item}
        </p>
        </>
    
    );
};

export default Reduce;