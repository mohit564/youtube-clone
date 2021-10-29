import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Loader type="Oval" color="#333" />
      <h2 className="text-2xl text-center">Loading...</h2>
    </div>
  );
}

export default Loading;
