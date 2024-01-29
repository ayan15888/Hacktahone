import React from "react";
import vid from "../assets/video.mp4";
function VideoComponent() {
  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
      <video src={vid} autoPlay muted loop className="video"></video>
      
    </div>
  );
}

export default VideoComponent;
