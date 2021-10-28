import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularVideos } from "../../redux/actions/videos.action";

import VideoVerticalCard from "./VideoVerticalCard";
import SkeletonContent from "../SkeletonContent/SkeletonContent";

function VideoList() {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.popularVideos);

  useEffect(() => {
    dispatch(fetchPopularVideos());
    // eslint-disable-next-line
  }, []);

  const fetchMoreVideos = () => {
    dispatch(fetchPopularVideos());
  };

  if (!videos.length) return <SkeletonContent />;

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchMoreVideos}
      hasMore={true}
      className="grid grid-cols-1 gap-6 m-4 md:grid-cols-3 xl:grid-cols-4"
    >
      {videos.map((video) => (
        <VideoVerticalCard key={video.id} video={video} />
      ))}
    </InfiniteScroll>
  );
}

export default VideoList;
