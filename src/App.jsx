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
  console.log("transactions",transactions);
 
  return (
    <>
    <h1>Finance </h1>
    <div className='flex flex-col justify-center items-center pt-40'>
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
             <div key={index} className='flex' >
              
              <h1 className='font-bold underline text-2xl w-60'> {index+1}{')'}{data.amount}</h1>
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
