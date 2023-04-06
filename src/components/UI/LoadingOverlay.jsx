import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
      <div className="animate-spin h-[24px] w-[24px] border border-solid border-t-transparent border-white rounded-full"></div>
    </div>
  );
};

export default LoadingOverlay;
