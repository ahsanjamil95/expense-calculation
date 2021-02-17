import './App.css'
import React, {useContext , useState} from 'react';
import ContextStore from './contextStore';

function Expense(){

    let {GetContextStore , addTrans}= useContext(ContextStore);
    let [newdesc , updtdesc] = useState("");
    let [newamount , updtamount] = useState(0);

    const handleAdd = (e)=>{
        e.preventDefault();
        addTrans({
            amount:Number(newamount),
            desc:newdesc
        })
        
    }

    const getIncome = ()=>{
        let income = 0;
        for(var i=0; i<GetContextStore.length; i++){
            if(GetContextStore[i].amount>0)
            income+=GetContextStore[i].amount
        }
        return income;
    }

    const getExpense = ()=>{
        let expense = 0;
        for(var i=0; i<GetContextStore.length; i++){
            if(GetContextStore[i].amount<0)
            expense+=GetContextStore[i].amount
        }
        return expense;
    }
    
    return(
        <div className="container">
            <h1 className="title">Expense Tracker</h1>
            <p className="subTitle">Your Balance <br/> $ {getIncome() + getExpense()} </p>
            <div className="income_track">
                <p className="subTitle">Income  <br/>  <span  className="income">${getIncome()}</span>  </p>
                <p className="subTitle">Expense <br/>  <span  className="expense">${getExpense()}</span> </p>
            </div>
            <p className="subTitle">History</p>
            <hr/>

            <ul className="historyRec">
                {
                    GetContextStore.map((data, index)=>{
                        return(
                        <li>
                        <p key={index}>{data.desc}</p><p>${data.amount}</p>
                    </li>
                    );

                    })
                }
                
            </ul>

            <p className="subTitle">Add New Transaction</p>
            <hr/>
            <form onSubmit={handleAdd}>
            <p className="subTitle">Name</p> 
            <input type="text" placeholder="Enter Name" className="formInput" onChange={(e)=>updtdesc(e.target.value)}/>
            <p className="subTitle">Amount</p> 
            <input type="text" placeholder="Enter Amount" className="formInput" onChange={(e)=>updtamount(e.target.value)}/>
            <button type="submit" className="btn">Add Transaction</button>
            </form>

            

        </div>
    );
}

export default Expense;