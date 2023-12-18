"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideo = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <>
        <div className="fixed bottom-2 right-2">
          <button onClick={handleVideo} className="text-white float-right">
            <XCircle size={32} />
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(e) => e.target.pauseVideo()}
            opts={option}
          />
        </div>
      </>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideo}
        className="fixed bottom-5 right-2 w-32 bg-white text-color-dark rounded text-md hover:bg-color-accent transition-all"
      >
        Watch Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
