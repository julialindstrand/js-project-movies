import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home'
// import { MovieCard } from '../Components/MovieCard'

const apiKey = '1126aa859065d4eba48bcfccb414407a'

export const Movie = () => {
  const [movie, setMovie] = useState('')
  const { id } = useParams()


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)

      const OneMovieData = await response.json()
      setMovie(OneMovieData)

      console.log('a movie', OneMovieData)

    }

    fetchMovies()

  }, [id])


  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  )
}