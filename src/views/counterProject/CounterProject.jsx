import React, {useReducer} from 'react'
import { Link } from 'react-router-dom'

// Define some values outside of the component
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unhandled action type');
  }
}

function CounterProject() {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <ul className="flex space-x-4">
            <li><a href="#cards" className="hover:text-blue-600">Features</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button></li>
          </ul>
        </nav>
      </header>

      {/* main content */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>

    </div>
  )
}

export default CounterProject