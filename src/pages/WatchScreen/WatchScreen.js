import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoById } from "../../redux/actions/videos.action";

import Layout from "../../components/Layout/Layout";
import VideoMetaData from "../../components/Content/VideoMetaData";
import RelatedVideos from "../../components/Content/RelatedVideos";

function WatchScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { video, loading } = useSelector((state) => state.selectedVideo);

  useEffect(() => {
    dispatch(fetchVideoById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout>
      <div className="flex-1 p-4">
        <div className="flex flex-wrap mx-auto lg:max-w-6xl">
          <div className="w-full mx-auto md:flex-1">
            <div className="mb-3">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full h-60 md:h-80 lg:h-96"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {!loading && video && <VideoMetaData video={video} videoId={id} />}
          </div>
          {!loading && video && <RelatedVideos videoId={id} />}
        </div>
      </div>
    </Layout>
  );
}

export default WatchScreen;
