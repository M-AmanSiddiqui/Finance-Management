import { useState } from "react";
import "./App.css";
import image from "../src/assets/images/Financial-Management.jpg";

function App() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    if (!amount) return;
    setTransactions([...transactions, { amount: Number(amount), type }]);
    setAmount("");
    setType("income");
  };

  const totalIncome = transactions.reduce(
    (acc, transaction) => (transaction.type === "income" ? acc + transaction.amount : acc),
    0
  );

  const totalExpense = transactions.reduce(
    (acc, transaction) => (transaction.type === "expense" ? acc + transaction.amount : acc),
    0
  );

  const balanceAmount = totalIncome - totalExpense;

  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 bg-gray-900 text-white" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <h1 className="text-3xl font-extrabold my-6 text-center relative z-10 shadow-md mt-72">💰 Finance Management App 💰</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl text-center relative z-10">
        <div className="p-6 border rounded-lg bg-white bg-opacity-20 shadow-lg">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-green-400 text-2xl">${totalIncome}</p>
        </div>
        <div className="p-6 border rounded-lg bg-white bg-opacity-20 shadow-lg">
          <h2 className="text-lg font-semibold">Total Expense</h2>
          <p className="text-red-400 text-2xl">${totalExpense}</p>
        </div>
        <div className={`p-6 border rounded-lg bg-white bg-opacity-20 shadow-lg ${balanceAmount >= 0 ? "bg-green-600 bg-opacity-20" : "bg-red-600 bg-opacity-20"}`}>
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className={balanceAmount >= 0 ? "text-green-300 text-2xl" : "text-red-300 text-2xl"}>${balanceAmount}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-2xl relative z-10">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 w-full sm:w-auto flex-1 rounded-md bg-gray-800 text-white placeholder-gray-400"
          type="number"
          placeholder="Enter Amount"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-3 rounded-md bg-gray-800 text-white"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={handleAddTransaction}
          className="bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 shadow-md transition duration-300"
        >
          ➕ Add Transaction
        </button>
      </div>

      <div className="mt-6 w-full max-w-2xl relative z-10">
        {transactions.map((data, index) => (
          <div key={index} className="flex justify-between p-3 border-b bg-white bg-opacity-20 rounded-md shadow-sm my-2">
            <p className="font-semibold text-lg">{index + 1}. ${data.amount}</p>
            <p className={data.type === "income" ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
              {data.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;