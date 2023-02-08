// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ApprovesvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#qRHi90At-a)"} fill={"#12B76A"}>
        <path
          d={
            "M17.429 8.072c.51.51.51 1.345 0 1.856l-6 6a1.315 1.315 0 01-1.856 0l-3-3a1.316 1.316 0 010-1.856 1.315 1.315 0 011.856 0l2.072 2.072 5.072-5.072a1.315 1.315 0 011.856 0z"
          }
        ></path>

        <path
          opacity={".4"}
          d={
            "M0 12C0 5.372 5.372 0 12 0s12 5.372 12 12-5.372 12-12 12S0 18.628 0 12zm17.428-2.072a1.315 1.315 0 000-1.856 1.316 1.316 0 00-1.856 0L10.5 13.144l-2.072-2.072a1.315 1.315 0 00-1.856 0 1.315 1.315 0 000 1.856l3 3c.51.511 1.345.511 1.856 0l6-6z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"qRHi90At-a"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ApprovesvgIcon;
/* prettier-ignore-end */
