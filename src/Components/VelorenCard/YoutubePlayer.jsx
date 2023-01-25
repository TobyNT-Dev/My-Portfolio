import React, { useRef } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = () => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const playerRef = useRef(null);

  const onReady = (event) => {
    event.target.loadVideoById({
      videoId: "yNxxCwwKyes",
      startSeconds: 7269,
    });
  };

  return (
    <YouTube
      videoId="yNxxCwwKyes"
      opts={opts}
      onReady={onReady}
    />
  );
};

export default YoutubePlayer;