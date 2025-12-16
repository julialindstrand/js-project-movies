import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { MovieCard } from '../Components/MovieCard'

const apiKey = '1126aa859065d4eba48bcfccb414407a'

export const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)

      const movieData = await response.json()

      setMovies(movieData.results)
    }

    fetchMovies()

  }, [])

  return (
    <section className='movies'>
      {movies.map(movie => (
        <div>
          <Link to={`/Movie/${movie.id}`}>{movie.title}</Link>
          <p key={movie.date}>{movie.release_date}</p>
          {/* <img key={movie.id}>{movie.poster_path}</img> */}
        </div>
      ))
      }
    </section >
  )
}

export default Home

// Prepp för image
// https://api.themoviedb.org/3/configuration?api_key=1126aa859065d4eba48bcfccb414407a

