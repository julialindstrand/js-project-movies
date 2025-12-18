import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

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
    <MoviesGrid>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <ImageWrapper>
              <Poster
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title}
              />
              <Overlay>
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </Overlay>
            </ImageWrapper>
          </Link>
        </MovieCard>
      ))}
    </MoviesGrid>
  )
}

export default Home

const MoviesGrid = styled.section`
  display: grid;
  background: black;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
`

const Poster = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  color: #fff;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  transition: opacity 0.25s ease;
`
const MovieCard = styled.article`
  position: relative;
  overflow: hidden;
  
    &:hover ${Overlay} {
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;}
`
