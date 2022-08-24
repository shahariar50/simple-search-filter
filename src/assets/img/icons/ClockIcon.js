import * as React from "react";

const ClockIcon = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 6.137v4.865l3.243 3.243"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 11c0-5.523-4.477-10-10-10S1 5.477 1 11s4.477 10 10 10 10-4.477 10-10Z"
      strokeWidth={1.5}
    />
  </svg>
);

export default ClockIcon;
