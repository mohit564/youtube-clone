import React from "react";

import SkeletonVideoCard from "./SkeletonVideoCard";

function SkeletonContent() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 m-4 md:grid-cols-3 xl:grid-cols-4">
      {Array(20)
        .fill()
        .map((_, i) => (
          <SkeletonVideoCard key={i} />
        ))}
    </div>
  );
}

export default SkeletonContent;
