import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SongCard from './SongCard';
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation } from 'swiper/modules';
const Albums = () => {
  const [song,setSong]=useState([])
    const options = {
      method: 'GET',
      url: 'https://apple-marketing-tools.p.rapidapi.com/gh/music/most-played/10/songs.json',
      headers: {
        'X-RapidAPI-Key': '2410b3cbcemsh6b0acf9357fc7d7p1decf6jsnd45316e4529d',
        'X-RapidAPI-Host': 'apple-marketing-tools.p.rapidapi.com'
      }
    };
      const datafetch= async()=>{
        try {
          const response = await axios.request(options);
          // console.log(response.data);
          setSong(response.data.feed.results)
          console.log(song)
        } catch (error) {
          console.error(error);
        }
      }
  
      
      useEffect(()=>{
        datafetch()
      },[song])
  return (
    <div className='p-5'>
      
     
        <h3 className='text-start text-white'>Most Played Songs</h3>
       
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
           song.map((ele,ind)=>{
            return(
              // <Col md={3}  key={ind}>
                <Link to={ele.url}>
              <SwiperSlide>
                <SongCard ele={ele}/>
                </SwiperSlide>
                </Link>
            // </Col>
            )
          })
        
        }
  
      </Swiper>
       
    </div>
  )
}

export default Albums
