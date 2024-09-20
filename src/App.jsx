import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [amount , setamount] = useState (0);
  const [type,setType] = useState ("income");
  const [transactions,setTransactions] = useState ([]);

  const handleAddTransactions = () =>{
    setTransactions([...transactions , {amount,type}])
    setamount('')
    setType('income')
    
    
  };

  const totalIncome = transactions.reduce((acc , transactions) => transactions.type == "income" ? acc + Number(transactions.amount) : acc, 0);
 
  const totalExpense = transactions.reduce((acc , transactions) => transactions.type == "expense" ? acc + Number(transactions.amount) : acc, 0);
  
 const balanceAmount = totalIncome - totalExpense 
  return (
    <>
    <h1 className='flex flex-col justify-center items-center font-bold pt-32 text-2xl'>Finance Management App</h1>
    <div className='flex flex-col justify-center items-center pt-20'>
      <div className='flex justify-center items-center gap-3 my-4'>
        <div className='p-2 px-5 border border-purple-600 rounded-md'><h1>Total Income </h1><h1>{totalIncome}</h1></div>
        
        <div className='p-2 px-5 border border-purple-600 rounded-md'><h1>Total Expense </h1><h1>{totalExpense}</h1></div>
        
        <div className={`p-2 px-5 border border-purple-600 rounded-md ${balanceAmount > 0 ? 'bg-green-50' : "bg-red-50"}`}><h1> Balance</h1><h1>{balanceAmount}</h1></div>
      </div>
      <div className='flex'>
<input 
value={amount}
onChange={(e) => setamount(e.target.value)}
 className="border border-purple-600 rounded-sm m-4 mx-2 p-1" type="number" placeholder='add Amount'/>
<select value={type}
onChange={(e) => setType(e.target.value)}
className='border border-purple-600 rounded-sm m-4 mx-2 p-1'> 
  <option value="income">income</option>
  <option value="expense">expense</option>

</select>
<button onClick={handleAddTransactions} className='border border-purple-600 rounded-sm m-4 mx-2 p-1'>submit</button>
      </div>
      <div>
        {
          transactions.map((data , index)=>{
            return (
             <div key={index} className='flex my-2' >
              
              <h1 className='font-semibold underline text-2xl w-60'> {index+1}{')'}{data.amount}</h1>
            <h1 className={`font-bold underline text-2xl ${data.type === "income" ? "text-green-700" : "text-red-700"  }`}
             >
              {data.type}</h1>
            </div>
            );
          })}
        
      </div>
    </div>
    </>
  )
}

export default App
