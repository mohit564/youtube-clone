import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import { fetchVideosBySearch } from "../../redux/actions/videos.action";
import VideoHorizontalCard from "../../components/Content/VideoHorizontalCard";

function SearchScreen() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.searchVideos);

  useEffect(() => {
    dispatch(fetchVideosBySearch(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Layout>
      <section className="flex flex-col flex-1 max-w-4xl p-3 mx-auto">
        {videos?.map((video) => {
          return <VideoHorizontalCard video={video} key={video.id.videoId} />;
        })}
      </section>
    </Layout>
  );
}

export default SearchScreen;
