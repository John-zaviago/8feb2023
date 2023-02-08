// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SearchBoldsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#hsV-4TeiKa)"} fill={"#000"}>
        <path
          d={
            "M15.634 13.866l-3.74-3.741a6.54 6.54 0 01-1.768 1.768l3.74 3.74a1.25 1.25 0 101.768-1.767z"
          }
        ></path>

        <path
          opacity={".4"}
          d={
            "M6.472 0C2.91 0 0 2.91 0 6.5S2.91 13 6.472 13c3.561 0 6.5-2.91 6.5-6.5S10.09 0 6.472 0zm0 10.5c-2.206 0-4-1.794-4-4s1.794-4 4-4c2.205 0 4 1.794 4 4s-1.766 4-4 4z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"hsV-4TeiKa"}>
          <path fill={"#fff"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchBoldsvgIcon;
/* prettier-ignore-end */
