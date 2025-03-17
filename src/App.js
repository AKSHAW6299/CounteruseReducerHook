import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterProject from './views/home/CounterProject';
import Index from './views/index/Index';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CounterProject />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App