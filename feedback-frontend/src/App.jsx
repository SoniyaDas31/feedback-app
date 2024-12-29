import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './component/404page';
import Home from './component/Home';
import FeedbackDashboard from './component/FeedbackDashboard';
import Login from './component/Login';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<ErrorPage/>} />
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<FeedbackDashboard  />}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  )
}


export default App
