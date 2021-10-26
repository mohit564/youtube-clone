import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularVideos } from "../../redux/actions/videos.action";

import VideoCard from "./VideoCard";

function Content() {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.popularVideos);

  useEffect(() => {
    dispatch(fetchPopularVideos());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-6 m-4 md:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Content;
