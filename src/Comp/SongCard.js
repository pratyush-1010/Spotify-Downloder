import React from 'react'

const SongCard = ({ele}) => {
  return (
    <div className='text-white songcard p-4'>
        <img src={ele.artworkUrl100} className='songimg'/>
        <p className='songname pt-2'>{ele.name}</p>
        <p className=' artist'>{ele.artistName}</p>
    </div>
  )
}

export default SongCard