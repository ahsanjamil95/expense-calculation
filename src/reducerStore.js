import React from 'react';

const TransReducer = ((state,action)=>{
    switch(action.type){
        case "ADD":{
            return [action.payload, ...state]
        }
        default:
            return state;
    }
})

export default TransReducer;