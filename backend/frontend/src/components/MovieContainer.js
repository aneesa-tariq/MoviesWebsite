
import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movie = useSelector(app => app.movie);

  return (
    <div className='bg-black h-64 w-[100%]'>
      <div className='absolute '>
      <MovieList title={"Popular Movies"} movies={movie.popularMovies} />
      <div className='-mt-[17.6%]'>
      <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
      <div className='-mt-[17.6%]'>
      <MovieList title={"Top Tated Movies"} movies={movie.topRatedMovies} />
      </div>
      <div className='-mt-[17.6%]'>
      <MovieList title={"Upcoming Movies"} movies={movie.upComingMovies} />

      </div>
      </div>
      </div>
    </div>
  )
}

export default MovieContainer
