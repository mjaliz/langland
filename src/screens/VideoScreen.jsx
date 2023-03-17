import React from "react";

const VideoScreen = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <video
          src="http://localhost:5000/videos/croods_S1E1.mp4"
          controls
          crossOrigin="anonymous"
        >
          <track
            src="http://localhost:5000/vtts/croods_S1E1.vtt"
            default
            kind="captions"
            srcLang="en"
            onChange={(e) => handleChange(e)}
          />
        </video>
      </div>
    </div>
  );
};

export default VideoScreen;
