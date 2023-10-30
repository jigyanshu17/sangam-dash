import React from "react";

function UsersIcon(width, height) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 256 256"
    >
      <path d="M136 108a52 52 0 11-52-52 52 52 0 0152 52z" opacity="0.2"></path>
      <path d="M117.25 157.92a60 60 0 10-66.5 0 95.83 95.83 0 00-47.22 37.71 8 8 0 1013.4 8.74 80 80 0 01134.14 0 8 8 0 0013.4-8.74 95.83 95.83 0 00-47.22-37.71zM40 108a44 44 0 1144 44 44.05 44.05 0 01-44-44zm210.14 98.7a8 8 0 01-11.07-2.33A79.83 79.83 0 00172 168a8 8 0 010-16 44 44 0 10-16.34-84.87 8 8 0 11-5.94-14.85 60 60 0 0155.53 105.64 95.83 95.83 0 0147.22 37.71 8 8 0 01-2.33 11.07z"></path>
    </svg>
  );
}

export default UsersIcon;