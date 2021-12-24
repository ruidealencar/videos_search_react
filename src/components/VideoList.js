import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const renderedList = videos.map((video, key) => {
    return (
      <VideoItem onVideoSelected={onVideoSelected} video={video} key={key} />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
