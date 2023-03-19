import React, { useEffect, useRef } from "react";

import subs from "../subtitle.json";

const VideoScreen = () => {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const subRef = {};

  useEffect(() => {
    trackRef.current.oncuechange = (event) => {
      let cues = event.target.track.activeCues;
      if (cues.length > 0 && cues[0].text)
        subRef[cues[0].id].scrollIntoView({
          behavior: "smooth",
        });
    };
  }, []);

  const handleClickSub = (subTime) => {
    videoRef.current.currentTime = subTime;
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden max-h-screen">
      <div className="md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <video
          src="http://localhost:5000/videos/croods_S1E1.mp4"
          controls
          crossOrigin="anonymous"
          ref={videoRef}
        >
          <track
            src="http://localhost:5000/vtts/croods_S1E1.vtt"
            default
            kind="captions"
            srcLang="en"
            ref={trackRef}
          />
        </video>
      </div>
      <div className="md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] overflow-y-scroll">
        {subs.map((sub, index) => (
          <p
            className="text-center py-3 cursor-pointer"
            key={index}
            onClick={() => handleClickSub(sub.startTime)}
            ref={(ref) => (subRef[index] = ref)}
          >
            {sub.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default VideoScreen;
