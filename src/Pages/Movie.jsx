import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import styled from "styled-components"
import { StarIcon, ArrowIcon } from '../Components/Icons'

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
      <StyledLink to={`/`}><ArrowIcon /><P>Movies</P></StyledLink>

      <StyledContainer>
        <StyledImage src={`${imageBase}${movie.poster_path}`} />

        <StyledTextContainer>
          <StyledTitleContainer>
            <H1><span>{movie.title}</span><StyledSpan><StarIcon />{movie.vote_average}</StyledSpan></H1>
          </StyledTitleContainer>

          <P>{movie.overview}</P>
        </StyledTextContainer>

      </StyledContainer>
    </section>
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
const P = styled.p`
  color: white;
`
const StyledContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: flex-start; 
  align-items: flex-end; 
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
  background-color: white;
  color: black;
  font-size: 30px;
  margin: 5px;
  padding: 5px;
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
`