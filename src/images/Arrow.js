import React from "react";

const Arrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 149 16"
      fill="none"
    >
      <path
        d="M148.707 8.70711C149.098 8.31658 149.098 7.68342 148.707 7.29289L142.343 0.928932C141.953 0.538408 141.319 0.538408 140.929 0.928932C140.538 1.31946 140.538 1.95262 140.929 2.34315L146.586 8L140.929 13.6569C140.538 14.0474 140.538 14.6805 140.929 15.0711C141.319 15.4616 141.953 15.4616 142.343 15.0711L148.707 8.70711ZM0 9H148V7H0V9Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;