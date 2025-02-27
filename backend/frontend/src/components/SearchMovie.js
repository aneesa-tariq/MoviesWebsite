import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(({ app }) => app.isLoading);
  const { movieName, searchedMovie } = useSelector(store => store.searchMovie);


  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}`, options);
      console.log(res.data);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie(" ");
  }
  return (
    <>
    <div className='flex justify-center  pt-[9%] w-[100%]'>
      <form action="" onSubmit={submitHandler} className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
          <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className=" w-full outline-none rounded-md text-lg" type="text" placeholder='Search Movies.....' />
          <button className='text-white rounded-md bg-red-700 px-4 py-2 hover:bg-red-600'>{isLoading ? "Loading..." : "Search"}</button>
        </div>
      </form>
    </div>
    <div className='-mt-28'>
    {
                searchedMovie ? ( <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
            }
    </div>
   
    </>
  )
}

export default SearchMovie
