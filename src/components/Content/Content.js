import React from "react";

import VideoCard from "./VideoCard";

function Content() {
  return (
    <div className="grid grid-cols-1 gap-4 m-4 mx-auto md:grid-cols-3 xl:grid-cols-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default Content;
