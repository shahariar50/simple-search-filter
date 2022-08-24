import * as React from "react";

const LocationIcon = (props) => (
  <svg
    width={18}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.011 1.625c4.092 0 7.893 3.277 7.893 7.41 0 2.733-.923 4.665-2.47 6.917-1.727 2.515-3.932 4.882-4.918 5.9a.716.716 0 0 1-1.033 0c-.986-1.018-3.191-3.385-4.918-5.9-1.547-2.252-2.47-4.184-2.47-6.916 0-4.134 3.8-7.411 7.893-7.411"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M11.964 9.473c0 1.653-1.323 3.02-2.96 3.02s-2.969-1.367-2.969-3.02 1.332-2.907 2.97-2.907c1.636 0 2.959 1.254 2.959 2.907Z"
      strokeWidth={1.5}
    />
  </svg>
);

export default LocationIcon;
