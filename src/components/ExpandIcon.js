import React from 'react';

const ExpandIcon = ({ className }) => (
  <div>
    <svg
      className={className}
      fill="#000000"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </div>
);

export default ExpandIcon;
