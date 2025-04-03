import React, { useEffect, useState } from "react";

const SkillBar = ({ progress }) => {
  console.log(progress);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(progress);
  }, [progress]);
  return (
    <div className="w-full h-2 bgOpacity rounded-md mt-2 relative">
      <span
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md absolute top-0 left-0"
        style={{
          width: `${width}%`,
          transition: `width ${(progress / 100) * 1.5}s ease-in-out`,
        }}
      ></span>
    </div>
  );
};

export default SkillBar;