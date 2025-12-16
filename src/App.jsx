import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home'
import { Movie } from './Pages/Movie'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}