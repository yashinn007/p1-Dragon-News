import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-50 py-4 container mx-auto px-2">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        Match Highlights: Germany vs Spain — as it happened !
      </Marquee>
    </div>
  );
};

export default BreakingNews;
