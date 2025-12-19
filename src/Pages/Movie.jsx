import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import styled from "styled-components"
import { StarIcon, ArrowIcon } from '../Components/Icons'

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
    <section style={{
      backgroundImage: `
        linear-gradient(
        rgba(0, 0, 0, 0.6)
      ), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',

    }}
    >
      <StyledLink to={`/`}><ArrowIcon /><H2>Movies</H2></StyledLink>

      <StyledContainer>
        <StyledImage src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt={`Movie poster of the movie: ${movie.title}`} />

        <StyledTextContainer>
          <StyledTitleContainer>
            <H1>{movie.title} <StyledSpan><StarIcon /> {movie.vote_average}</StyledSpan></H1>
          </StyledTitleContainer>
          <P>{movie.overview}</P>
        </StyledTextContainer>

      </StyledContainer>
    </section >
  )
}

const StyledImage = styled.img`
  border: 5px solid white;
  max-width: 400px;
  width: 100%;
`
const H1 = styled.h1`
  color: white;
  margin-bottom: 20px;
`

const H2 = styled.h2`
  color: white;
`

const P = styled.p`
  color: white;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-end; 
  margin-top: 15%;
  padding: 50px;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`
const StyledTextContainer = styled.div`
  max-width: 500px;
`
const StyledSpan = styled.span`
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  font-size: 20px;
  `
const StyledTitleContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
  `
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 50px;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`