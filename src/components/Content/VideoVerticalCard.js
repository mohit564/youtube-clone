import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

import request from "../../api";

function VideoCard({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const [duration, setDuration] = useState(null);
  const [views, setViews] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const history = useHistory();

  // GET VIDEO DETAILS
  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const response = await request.get("/videos", {
          params: {
            part: "contentDetails, statistics",
            id: id,
          },
        });

        // FORMAT DURATION OF VIDEO
        const seconds = moment
          .duration(response.data.items[0].contentDetails.duration)
          .asSeconds();
        const _duration = moment.utc(seconds * 1000).format("mm:ss");
        setDuration(_duration);

        // FORMAT VIEW COUNT OF VIDEO
        const _views = numeral(response.data.items[0].statistics.viewCount)
          .format("0.0a")
          .toUpperCase();
        setViews(_views);
      } catch (error) {
        console.error(error);
      }
    };
    getVideoDetails();
  }, [id]);

  // GET CHANNEL ICON
  useEffect(() => {
    const getChannelIcon = async () => {
      try {
        const response = await request.get("/channels", {
          params: {
            part: "snippet",
            id: channelId,
          },
        });
        setChannelIcon(response.data.items[0].snippet.thumbnails.default.url);
      } catch (error) {
        console.error(error);
      }
    };
    getChannelIcon();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${id}`);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleVideoClick}>
      <figure className="relative">
        <img
          className="w-full"
          src={medium.url}
          alt="thumbnail"
          loading="lazy"
        />
        <span className="absolute p-1 text-sm text-white bg-black rounded right-2 bottom-2">
          {duration}
        </span>
      </figure>
      <div className="flex mt-2">
        <figure>
          <img
            src={channelIcon}
            alt="channel"
            className="w-10 h-10 mr-2 rounded-full"
            loading="lazy"
          />
        </figure>
        <div className="w-11/12 px-2">
          <p className="font-medium line-clamp-2">{title}</p>
          <p className="text-sm text-gray-500">{channelTitle}</p>
          <p className="text-sm text-gray-500">
            {views} views • {moment(publishedAt).fromNow().replace(/^a/, "1")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
