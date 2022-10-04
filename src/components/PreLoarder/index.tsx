import React from "react";

import { PreLoadWrapper } from "./styles";

function PreLoarder() {
  return (
    <PreLoadWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <g transform="translate(26.667 26.667)">
          <path fill="#35312f" d="M-20 -20H20V20H-20z">
            <animateTransform
              attributeName="transform"
              begin="-0.3s"
              dur="1s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="scale"
              values="1.1500000000000001;1"
            ></animateTransform>
          </path>
        </g>
        <g transform="translate(73.333 26.667)">
          <path fill="#d34b22" d="M-20 -20H20V20H-20z">
            <animateTransform
              attributeName="transform"
              begin="-0.2s"
              dur="1s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="scale"
              values="1.1500000000000001;1"
            ></animateTransform>
          </path>
        </g>
        <g transform="translate(26.667 73.333)">
          <path fill="#fb9c23" d="M-20 -20H20V20H-20z">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="scale"
              values="1.1500000000000001;1"
            ></animateTransform>
          </path>
        </g>
        <g transform="translate(73.333 73.333)">
          <path fill="#319778" d="M-20 -20H20V20H-20z">
            <animateTransform
              attributeName="transform"
              begin="-0.1s"
              dur="1s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="scale"
              values="1.1500000000000001;1"
            ></animateTransform>
          </path>
        </g>
      </svg>
    </PreLoadWrapper>
  );
}

export default PreLoarder;
