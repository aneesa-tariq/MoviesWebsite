import React from 'react';
import { Banner_Url } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterPath,movieId}) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }
    return (
        <div className='w-48' onClick={handleOpen}>
            <img src={`${Banner_Url}/${posterPath}`} alt="movie-banner" />
        </div>
    )
}

export default MovieCard
