import axios from 'axios';
import { upcoming_movie, options } from '../utils/constants';
import {getUpComingMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

 const useUpComingMovies = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(upcoming_movie, options);
      dispatch(getUpComingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }
  export default  useUpComingMovies;