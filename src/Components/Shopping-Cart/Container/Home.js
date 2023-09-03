import React from 'react'
import Header from '../Component/Header'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './DashBoard'






function Home() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<DashBoard />} />
        

      </Routes>

    </div>
  )
}

export default Home