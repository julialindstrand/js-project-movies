import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
// import { MovieCard } from '../Components/MovieCard'

const apiKey = '1126aa859065d4eba48bcfccb414407a'

const imageBase = 'https://image.tmdb.org/t/p/w1280'

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
    <StyledMovies className='movies'>
      {movies.map(movie => (
        <Link to={`/Movie/${movie.id}`}>
          <StyledDiv style={{
            backgroundImage: `url(${imageBase}${movie.poster_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <StyledText>
              <h1>{movie.title}</h1>
              <p key={movie.date}>Released {movie.release_date}</p>
            </StyledText>
          </StyledDiv>
        </Link>
      ))
      }
    </StyledMovies >
  )
}

export default Home

const StyledMovies = styled.section`
  display: flex;
  flex-wrap: wrap;
  `

const StyledDiv = styled.div`
    width: 220px;
    height: 330px;
    position: relative;

  &:hover {
    
    /* Show the text overlay when hovering parent */
    div {
      opacity: 1;
      background: rgba(0,0,0,0.6);  /* semi-transparent overlay */
    }
  }
`
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  opacity: 0;                   /* hidden by default */
  transition: opacity 0.25s ease;
`