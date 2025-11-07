import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
};

const GooglePlay: React.FC<Props> = ({ width = "135", height = "135" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 -47.5 135 135"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="21.8"
        y1="33.29"
        x2="5.017"
        y2="16.508"
        gradientTransform="matrix(1 0 0 -1 0 42)"
      >
        <stop offset="0" stopColor="#00a0ff" />
        <stop offset=".007" stopColor="#00a1ff" />
        <stop offset=".26" stopColor="#00beff" />
        <stop offset=".512" stopColor="#00d2ff" />
        <stop offset=".76" stopColor="#00dfff" />
        <stop offset="1" stopColor="#00e3ff" />
      </linearGradient>

      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="33.834"
        y1="21.999"
        x2="9.637"
        y2="21.999"
        gradientTransform="matrix(1 0 0 -1 0 42)"
      >
        <stop offset="0" stopColor="#ffe000" />
        <stop offset=".409" stopColor="#ffbd00" />
        <stop offset=".775" stopColor="orange" />
        <stop offset="1" stopColor="#ff9c00" />
      </linearGradient>

      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="24.827"
        y1="19.704"
        x2="2.069"
        y2="-3.054"
        gradientTransform="matrix(1 0 0 -1 0 42)"
      >
        <stop offset="0" stopColor="#ff3a44" />
        <stop offset="1" stopColor="#c31162" />
      </linearGradient>

      <linearGradient
        id="SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1="7.297"
        y1="41.824"
        x2="17.46"
        y2="31.661"
        gradientTransform="matrix(1 0 0 -1 0 42)"
      >
        <stop offset="0" stopColor="#32a071" />
        <stop offset=".069" stopColor="#2da771" />
        <stop offset=".476" stopColor="#15cf74" />
        <stop offset=".801" stopColor="#06e775" />
        <stop offset="1" stopColor="#00f076" />
      </linearGradient>
    </defs>

    <path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z" />
    <path
      fill="white"
      d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z"
    />

    <g>
      <path
        fill="url(#SVGID_1_)"
        d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z"
      />
      <path
        fill="url(#SVGID_2_)"
        d="M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"
      />
      <path
        fill="url(#SVGID_3_)"
        d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4"
      />
      <path
        fill="url(#SVGID_4_)"
        d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z"
      />
      <path
        opacity=".2"
        d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z"
      />
      <path
        opacity=".12"
        d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z"
      />
      <path
        opacity=".25"
        fill="#fff"
        d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5c-1.4-.8-2.5-.2-2.5 1.4V9c0-1.5 1.1-2.2 2.5-1.4z"
      />
    </g>
  </svg>
);

export default GooglePlay;
