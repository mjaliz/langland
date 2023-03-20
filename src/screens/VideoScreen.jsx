import React, { useEffect, useRef, useState } from "react";

import subs from "../subtitle.json";
import subsFa from "../subtitle-fa.json";

const VideoScreen = () => {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const subRef = {};
  const [currentSubId, setCurrentSubId] = useState(null);
  const [trackElement, setTrackElement] = useState(null);

  useEffect(() => {
    setTrackElement(trackRef);
  }, []);

  if (trackElement)
    trackElement.current.oncuechange = (event) => {
      let cues = event.target.track.activeCues;
      if (cues.length > 0 && cues[0].text) {
        setCurrentSubId(cues[0].id - 1);
        subRef[cues[0].id].scrollIntoView({
          behavior: "smooth",
        });
      }
    };

  const handleClickSub = (subTime) => {
    videoRef.current.currentTime = subTime;
  };

  const renderCurrentSub = () => {
    return (
      <div
        className={`px-3 justify-center items-center w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-dark-1 text-center`}
      >
        <div className="my-2 flex flex-col gap-2">
          <p className="text-white font-bold">{subs[currentSubId]?.text}</p>
          <p className="text-gold font-semibold">
            {subsFa[currentSubId]?.text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden max-h-screen">
      <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <video
          src="http://192.168.1.106:5000/videos/croods_S1E1.mp4"
          controls
          crossOrigin="anonymous"
          ref={videoRef}
        >
          <track
            src="http://192.168.1.106:5000/vtts/croods_S1E1.vtt"
            default
            kind="metadata"
            srcLang="en"
            ref={trackRef}
          />
        </video>
      </div>
      {renderCurrentSub()}
      <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] overflow-y-scroll bg-dark-2">
        {subs.map((sub, index) => (
          <p
            className="text-center py-3 cursor-pointer text-gray-1"
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
