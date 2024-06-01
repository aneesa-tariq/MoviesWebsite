import { React, useEffect } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import SearchMovie from './SearchMovie';




const Browse = () => {
  const user = useSelector(({ app }) => app.user);
  const toggle = useSelector(app => app.movie.toggle);
  // const movie = useSelector(({ app }) => app.movie);
  const navigate = useNavigate();
  //my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },);

  return (
    <div className='w-[100%]'>
      <Header />
      <div>
        {
          toggle ? <SearchMovie /> : (
            <>
              <MainContainer />
              <MovieContainer />
            </>
          )
        }

      </div>
    </div>
  )
}

export default Browse
