import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({ title, movies ,searchMovie=false}) => {
    console.log(movies);
    return (
        <div className='bg-black  mt-[17.5%] px-8'>
            <h1 className='text-3xl  text-white py-4'>{title}</h1>
            <div className=' flex overflow-x-auto cursor-pointer'>
                <div className=' flex space-x-2 items-center text-white'>
                    {movies?.map((movie) => {
                        return (
                            <MovieCard movieId={movie.id} posterPath={movie.poster_path} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList
