import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <section>
      <div className="video-player">
      <h1>Video</h1>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=IJ-hiw1CqyA"
        playing={true}
        volume={0}
        muted={true}
        controls={true}
        width={'100%'}
        height={'100%'}
        />
      </div>
    </section>
  )
}

export default Video
