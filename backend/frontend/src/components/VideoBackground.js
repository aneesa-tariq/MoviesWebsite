import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({movieId}) => {
  const trailerMovie=useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div className=' aspect-video absolute w-screen'>
      <iframe  className="w-screen aspect-video"  src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
