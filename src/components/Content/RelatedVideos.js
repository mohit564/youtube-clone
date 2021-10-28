import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRelatedVideos } from "../../redux/actions/videos.action";
import VideoHorizontalCard from "../../components/Content/VideoHorizontalCard";

function RelatedVideos({ videoId }) {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideos(videoId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <aside className="w-full mt-5 md:max-w-xs lg:max-w-sm md:pl-6 md:mt-0">
      <p className="mb-2 text-bold">Up Next</p>
      <div className="w-full">
        {!loading &&
          videos
            ?.filter((video) => video.snippet)
            ?.map((video) => {
              return (
                <VideoHorizontalCard video={video} key={video.id.videoId} />
              );
            })}
      </div>
    </aside>
  );
}

export default RelatedVideos;
