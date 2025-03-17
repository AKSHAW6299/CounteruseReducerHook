import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

function UseReducer() {

  // Defining the reducer function using switch-case
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  }

  // Initializing the useReducer hook
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className='min-h-screen bg-white flex flex-col'>

      {/* Header Section */}
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Academy</div>
          </Link>
          <div></div>
        </nav>
      </header>

      {/* Main Section */}
      <div className='text-center mt-6'>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          useReducer hook: Manage complex state with ease, mostly used with Redux.
        </h1>
      </div>

      {/* Counter Project Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Counter Project</h2>
        <div className="text-center mb-6">
          <span className="text-3xl font-semibold text-purple-600">Count: {count}</span>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-200 shadow-lg"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200 shadow-lg"
          >
            Decrement
          </button>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 shadow-lg"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  )
}

export default UseReducer
