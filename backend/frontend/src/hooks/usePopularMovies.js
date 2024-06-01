import axios from 'axios';
import { popular_movie, options } from '../utils/constants';
import {getPopularMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

 const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(popular_movie, options);
      dispatch(getPopularMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }
  export default  usePopularMovies;