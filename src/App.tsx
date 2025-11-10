import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './Payment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Green Background */}
      <section className="bg-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
            <img src={reactLogo} className="w-12 h-12" alt="React logo" />
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-bold mb-4">PayFlow Demo</h1>
          
          {/* Subtitle */}
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Experience seamless payment processing with modern React components
            and beautiful UI design
          </p>
        </div>
      </section>

      {/* Modern Payment Solutions Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Modern Payment Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Secure Processing */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Processing</h3>
              <p className="text-gray-600 text-sm">
                End-to-end encryption ensures your payment data is always protected and secure.
              </p>
            </div>

            {/* Lightning Fast */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                Powered by Vite and React for instant load times and smooth interactions.
              </p>
            </div>

            {/* Mobile Ready */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Ready</h3>
              <p className="text-gray-600 text-sm">
                Fully responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Interactive Demo</h3>
          
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors mb-6"
          >
            Click Counter: {count}
          </button>
          
          <p className="text-gray-600 text-sm">
            Fast, responsive, and easy to use! Not Modal or Redirected!
          </p>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Try Our Payment Form</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience our beautifully designed payment form with real-time validation, secure
            input handling, and smooth animations.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Payment />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* PayFlow Demo */}
            <div>
              <h4 className="text-lg font-semibold mb-4">PayFlow Demo</h4>
              <p className="text-gray-400 text-sm mb-4">
                A modern payment form built with React, Vite, and
                Tailwind CSS. Showcasing best practices in UX/UI
                design.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>⚡ React 19</li>
                <li>🚀 Vite</li>
                <li>🎨 Tailwind CSS</li>
                <li>📱 Responsive Javascript</li>
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Learn More</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="https://react.dev" target="_blank" className="hover:text-white transition-colors">
                    React Docs
                  </a>
                </li>
                <li>
                  <a href="https://vite.dev" target="_blank" className="hover:text-white transition-colors">
                    Vite Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
