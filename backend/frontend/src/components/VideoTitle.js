import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='mt-4 w-1/2'>{overview}</p>
      <div className='flex mt-8'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
        <CiPlay1 size="24px"/>
        <span className='ml-2'>Play</span>
        </button>
        <button className=' flex mx-2 items-center px-6 py-2 text-black bg-gray-300 bg-opacity-50 rounded-md'>
           <CiCircleInfo size="24px"/>
          <span className='ml-2'> Watch more</span>
           </button>
      </div>
    </div>
  )
}

export default VideoTitle
