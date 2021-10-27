import React from "react";

function SkeletonVideoCard() {
  return (
    <div className="flex flex-col">
      <div className="h-40 bg-gray-500" />
      <div className="flex mt-2">
        <div className="w-10 h-10 mr-2 bg-gray-500 rounded-full" />
        <div className="w-11/12 bg-gray-500 h-14" />
      </div>
    </div>
  );
}

export default SkeletonVideoCard;
