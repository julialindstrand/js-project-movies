import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Home from './Home'
import { Link } from 'react-router'
import styled from "styled-components"
// import { MovieCard } from '../Components/MovieCard'

const apiKey = '1126aa859065d4eba48bcfccb414407a'
const imageBase = 'https://image.tmdb.org/t/p/w1280'

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
    <section style={{
      backgroundImage: `url(${imageBase}${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}
    >
      <Link to={`/`}>Movies</Link>
      <StyledContainer>

        <StyledImage src={`${imageBase}${movie.poster_path}`} />

        <div>
          <StyledH1>{movie.title}</StyledH1>
          <StyledP>{movie.vote_average}</StyledP>
          <StyledP>{movie.overview}</StyledP>
        </div>

      </StyledContainer>
    </section>
  )
}

const StyledImage = styled.img`
  border: 5px solid white;
  max-width: 400px;
`
const StyledH1 = styled.h1`
  color: white;
`
const StyledP = styled.p`
  color: white;
`
const StyledContainer = styled.div`
  display: flex;
  margin: 50px;
  gap: 20px;
`

