import axios from 'axios';
import { now_playing_movie, options } from '../utils/constants';
import { getNowPlayingMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

 const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(now_playing_movie, options);
      dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }
  export default  useNowPlayingMovies;