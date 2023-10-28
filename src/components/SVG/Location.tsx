import * as React from "react";
const LocationIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={28}
    height={40}
    viewBox="0 0 28 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.25 13.25C16.25 13.8467 16.0129 14.419 15.591 14.841C15.169 15.2629 14.5967 15.5 14 15.5C13.4033 15.5 12.831 15.2629 12.409 14.841C11.9871 14.419 11.75 13.8467 11.75 13.25C11.75 12.6533 11.9871 12.081 12.409 11.659C12.831 11.2371 13.4033 11 14 11C14.5967 11 15.169 11.2371 15.591 11.659C16.0129 12.081 16.25 12.6533 16.25 13.25Z"
      stroke="#000000"
      strokeWidth={3}
      strokeLinejoin="round"
    />
    <path
      d="M26.375 14.375C26.375 21.2105 21.875 29 14 38C6.125 29 1.625 21.2105 1.625 14.375C1.625 11.0929 2.92879 7.94532 5.24955 5.62455C7.57032 3.30379 10.7179 2 14 2C17.2821 2 20.4297 3.30379 22.7504 5.62455C25.0712 7.94532 26.375 11.0929 26.375 14.375Z"
      stroke="#000000"
      strokeWidth={3}
      strokeLinejoin="round"
    />
  </svg>
);
export default LocationIcon;
