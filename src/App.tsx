import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './Payment'
import TailwindTest from './TailwindTest'

function App() {
  const [showPayment, setShowPayment] = useState(true)
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Header */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-8 h-8" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-8 h-8" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        React + Vite + Tailwind CSS
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button 
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            showPayment 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
          onClick={() => setShowPayment(true)}
        >
          Payment Form
        </button>
        <button 
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            !showPayment 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
          onClick={() => setShowPayment(false)}
        >
          Tailwind Demo
        </button>
      </div>

      {/* Content */}
      {showPayment ? (
        <Payment />
      ) : (
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="text-gray-600 mb-4">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <TailwindTest />
        </div>
      )}
    </div>
  )
}

export default App
