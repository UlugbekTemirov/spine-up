import React from "react";
import ReactPlayer from "react-player/lazy";


export default function ReviewPlayer({link}) {
  return (
    <ReactPlayer
          url={link}
        />
  );
}
