import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";

function VideoHorizontalCard({ video }) {
  const {
    id: { videoId },
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
            id: videoId,
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
  }, [videoId]);

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
    history.push(`/watch/${videoId}`);
  };

  return (
    <div
      className="flex w-full py-2 border-t border-b cursor-pointer"
      onClick={handleVideoClick}
    >
      <div className="relative w-1/2">
        <img
          src={medium.url}
          alt="thumbnail"
          className="absolute w-full h-full"
        ></img>
        <span className="absolute p-1 text-xs text-white bg-black rounded-sm bottom-1 right-1">
          {duration}
        </span>
      </div>
      <div className="w-1/2 pl-2">
        <h3 className="font-normal line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 ">
          {views} views • {moment(publishedAt).fromNow()}
        </p>
        <p className="text-sm text-gray-500">{channelTitle}</p>
      </div>
    </div>
  );
}

export default VideoHorizontalCard;
