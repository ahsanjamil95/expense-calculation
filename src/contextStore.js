
import { createContext, useReducer } from 'react';
import TransReducer from './reducerStore';

const trans = [
    {desc: "Salary",
    amount: 3000
    },
]

const ContextStore = createContext(trans);

export default ContextStore;




export const TransProvider = ({children})=>{

    let [state , dispatch]  = useReducer(TransReducer, trans);

    function addTrans(transObj){

        dispatch({
            type:"ADD",
            payload: {
                desc: transObj.desc,
                amount: transObj.amount
            }
        })
       


    }

    return(

        <ContextStore.Provider value={{
            GetContextStore:state,
            addTrans
        }}>
        {children}
        </ContextStore.Provider>
    )


}