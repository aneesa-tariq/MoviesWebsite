import axios from 'axios';
import { top_rated_movie, options } from '../utils/constants';
import {getTopRatedMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

 const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(top_rated_movie, options);
      dispatch(getTopRatedMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }
  export default  useTopRatedMovies;