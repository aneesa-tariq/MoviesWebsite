import axios from 'axios';
import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getMovieTrailer } from '../redux/movieSlice';
import { useEffect } from 'react';

const useMovieById = async (movieId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
      const getMovieById = async () => {
        try {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
  
          console.log(res.data.results);
          const trailer = res?.data?.results?.filter((item) => {
            return item.type === "Trailer";
          })
          dispatch(getMovieTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]));
        } catch (error) {
          console.log(error);
        }
      }
      getMovieById();
    },[dispatch,movieId])
  
  }
  
  export default useMovieById;
