import React from "react";

const EntryIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 64 66"
      fill="none"
    >
      <rect width="29.249" height="29.249" rx="8" fill={color} />
      <rect x="34.6906" width="29.249" height="29.249" rx="8" fill={color} />
      <rect y="36.051" width="29.249" height="29.249" rx="8" fill={color} />
      <rect
        x="34.6906"
        y="36.051"
        width="29.249"
        height="29.249"
        rx="8"
        fill={color}
      />
    </svg>
  );
};

export default EntryIcon;
