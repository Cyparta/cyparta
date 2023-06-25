import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Stars = ({ stars }) => {
  const star = Array.from({ length: 5 }, (_, index) => {
    return (
      <span className=" text-main" key={index}>
        {stars >= index + 1 ? (
          <StarIcon />
        ) : stars >= index + 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon sx={{ color: parseInt(stars) === 0 && "#d6d5d6" }} />
        )}
      </span>
    );
  });

  return (
    <div className="flex">
      {star} 
    </div>
  );
};

export default Stars;