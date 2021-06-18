import React from 'react';
import YouTube from 'react-youtube';
import './video.css';

const Video = ({videoId}) => {
    return (
        <div className="youtube">
          <YouTube className="youtube_size"
            
            videoId={videoId}
          />
        </div>
    )
}

export default Video;