import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const Video = () => {
  return (
    <section>
      <div className="player-wrapper">
        <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=Vk-o0Wl394o"
        playing={true}
        volume={0}
        muted={true}
        controls={true}
        width='100%'
        height='100%'
        />
      </div>
    </section>
  )
}

export default Video
