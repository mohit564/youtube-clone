import React from "react";

function VideoCard() {
  return (
    <div className="flex flex-col px-4 cursor-pointer">
      <figure className="relative">
        <img
          className="object-cover w-full h-44"
          src="https://i.ytimg.com/vi_webp/9tobL8U7dQo/maxresdefault.webp"
          alt="thumbnail"
        />
        <figcaption className="absolute p-1 text-sm text-white bg-black rounded right-2 bottom-2">
          1:48
        </figcaption>
      </figure>
      <div className="flex mt-2">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLQR6CdQxBvU0Ye8hUpCyMc6HMwoMivl_vad_YmjZg=s0"
          alt="channel"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <p className="px-2 font-medium line-clamp-2">
            The new MacBook Pro | Supercharged for pros | Apple
          </p>
          <p className="px-2 text-sm text-gray-500">Apple</p>
          <p className="px-2 text-sm text-gray-500">6.7M views • 6 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
