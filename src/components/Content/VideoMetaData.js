import React, { useState, useEffect } from "react";
import ShowMoreText from "react-show-more-text";
import { Helmet } from "react-helmet";
import * as Md from "react-icons/md";
import numeral from "numeral";
import moment from "moment";
import request from "../../api";

function VideoMetaData({ video: { snippet, statistics }, videoId }) {
  const { title, channelId, channelTitle, publishedAt, description } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const [channelIcon, setChannelIcon] = useState("");
  const [channelSubscribers, setChannelSubscribers] = useState(0);

  // GET CHANNEL ICON
  useEffect(() => {
    const fetchChannelDetail = async () => {
      try {
        const { data } = await request.get("/channels", {
          params: {
            part: "snippet, statistics",
            id: channelId,
          },
        });
        setChannelIcon(data.items[0].snippet.thumbnails.default.url);
        setChannelSubscribers(data.items[0].statistics.subscriberCount);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChannelDetail();
  }, [channelId]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h3 className="my-2 text-lg">{title}</h3>
      <div className="flex justify-between pb-3">
        <span className="text-gray-800">
          {Number(viewCount).toLocaleString()} views •{" "}
          {moment(publishedAt).format("LL")}
        </span>
        <div className="relative flex pb-2">
          <div className="flex items-center">
            <Md.MdThumbUp size={20} />
            <span className="ml-1 text-base text-gray-800">
              {numeral(likeCount).format("0.0a").toUpperCase()}
            </span>
          </div>
          <div className="flex items-center ml-2">
            <Md.MdThumbDown size={20} />
            <span className="ml-1 text-base text-gray-800">
              {numeral(dislikeCount).format("0.0a").toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full m-0 mb-3 border-t" />
      <div className="flex mt-2">
        <img
          src={channelIcon}
          alt="channel"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col w-11/12 ml-4">
          <p className="text-base">{channelTitle}</p>
          <p className="mb-4 text-base text-gray-500">
            {numeral(channelSubscribers).format("0.0a").toUpperCase()}{" "}
            Subscribers
          </p>
          <ShowMoreText
            lines={3}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="block text-sm mt-4 font-bold"
            expanded={false}
          >
            {description}
          </ShowMoreText>
        </div>
      </div>
    </>
  );
}

export default VideoMetaData;
