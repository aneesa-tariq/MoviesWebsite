import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return; //early return
  const {overview,id,title}=movie[4];
  return (
    <div>
      <VideoBackground movieId={id}/>
      <VideoTitle title={title} overview={overview}/>
    </div>
  )
}

export default MainContainer;
