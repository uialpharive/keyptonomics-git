import React from "react";

const GlowingSemiCircles: React.FC = () => {
  return (
    <div className="relative w-48 h-24">
      {/* Larger Glowing Semi-Circle */}
      <div className="absolute w-full h-full rounded-t-full bg-gradient-to-r from-purple-700 via-pink-400 to-white blur-xl"></div>

      {/* Medium Glowing Semi-Circle */}
      <div className="absolute w-3/4 h-3/4 left-6 bottom-0 rounded-t-full bg-gradient-to-r from-blue-600 via-purple-400 to-white blur-md"></div>

      {/* Smallest Glowing Semi-Circle */}
      <div className="absolute w-1/2 h-1/2 left-12 bottom-0 rounded-t-full bg-gradient-to-r from-indigo-500 via-blue-300 to-white blur-sm"></div>
    </div>
  );
};

export default GlowingSemiCircles;
