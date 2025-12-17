import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from './Pages/Home'
import { Movie } from './Pages/Movie'
import { GlobalStyle } from './GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<Movie />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}