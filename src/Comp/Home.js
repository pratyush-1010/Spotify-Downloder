import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Albums from './Albums'
import Songs from './Songs'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import{FaDownload, FaPlay, FaSpotify, FaYoutube} from 'react-icons/fa' 
import Tt from './Tt'
const Home = () => {

  const [song,setSong]=useState({})
  const [load,setLoad]=useState("none")
  const[artist,setArtist]=useState([{
    Name:"abc"
  }])
  const [inp,setInp]=useState('')
  const[disp,setDisp]=useState("none")
  console.log(inp)
    const options = {
    method: 'GET',
    url: 'https://spotify-downloader-api.p.rapidapi.com/Home/GetSpotifyUserInfo',
    params: {
      Tracklink:inp
    },
    headers: {
      'X-RapidAPI-Key': '2410b3cbcemsh6b0acf9357fc7d7p1decf6jsnd45316e4529d',
      'X-RapidAPI-Host': 'spotify-downloader-api.p.rapidapi.com'
    }
  };
      
      const datafetch= async()=>{
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setSong(response.data)
          setArtist(response.data.Artist)
          //   console.log(song)
        } catch (error) {
          console.error(error);
        }
        
      }
      
      const display=()=>{
        setDisp("block")

      }
      const handleclick=()=>{
        datafetch();
        display();
     
      }
      
      useEffect(()=>{
        setTimeout(()=>{

          datafetch()
        },2000)
      },[])
     
      
  return (
    <div className='p-5'>
      <h1 className='head py-5'><FaSpotify style={{color:"rgb(92,246,76)"}}/> Spotify Downloader</h1>
      {/* <Row>
        <Col lg={3}>
        </Col>
        <Col lg={9}>
          <Row>
            <Col lg={12}>
            <Songs/>
            </Col>
            <Col lg={12}>
            <Albums/>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <input type="text" value={inp}
       placeholder='Enter Spotify Url'
       onChange={(e) => setInp(e.target.value)}
       className='inp'
       />
      <button onClick={handleclick} className='search'>Search</button>
      <div style={{display:disp}}>
      <h1 style={{color:"green",display:load}}>Loading...</h1>
        
        {
          <>
          <p className='text-white sname pt-5'>Title : {song.SongTitle}</p>
          <p className='text-white sname pb-5'>Duration : {Math.round(song.Duration)} secs</p>
         <div className='smallscreen'>

          <Link to={`${song.Downloadurl}`} className='icons'>
             {/* <FaDownload/> */}
            <a className='nan'>Download Song</a>  <FaDownload></FaDownload>
          </Link>
          <Link to={`${song.PreviewUrl}`} className='icons'>
          
          <a className='nan'>Song Preview</a> <FaPlay/>
     
      {/* <FaPlay/> */}
          </Link>
          <Link to={`${song.YoutubeUrl}`} className='icons'>
           <a className='nan'>Wacth on Youtube</a> <FaYoutube/>
          </Link>
        </div>
          </>  
        }
          {/* <div className='art text-white'>
            Artist:
       
              </div>
         */}
      </div>
    </div>
  )
}

export default Home