import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaDownload, FaYoutube,FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TooltipPositionedExample({icon}) {
  console.log(icon)
  const [tt,setTt]=useState("")
  // if(icon == <FaDownload/>){
  //   setTt("Download Song")
  // }
  // else if(icon == <FaYoutube/>){
  //   setTt("Youtube Link")

  // }
  // else if(icon == <FaPlay/>){
  //   setTt("Preview")
  // }
  
  return (
    <>
      {[ 'bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              {tt}
            </Tooltip>
          }
        >
          {/* <Link to={`/${dlink}`}> */}
          <Button variant="secondary">{icon}</Button>
          {/* </Link> */}
        </OverlayTrigger>
      ))}
    </>
  );
}

export default TooltipPositionedExample;