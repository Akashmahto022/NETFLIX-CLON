import React from 'react'
import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import trailler from "../../Assest/images/video (1080p).mp4";


const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackIcon/>
        Home
      </div>
      <video src={trailler} className='video' autoPlay progress controls></video>
    </div>
  )
}

export default Watch
