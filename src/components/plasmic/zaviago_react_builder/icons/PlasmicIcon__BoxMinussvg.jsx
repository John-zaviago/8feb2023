// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BoxMinussvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={".5"}
        y={".5"}
        width={"19"}
        height={"19"}
        rx={"5.5"}
        fill={"#F9F5FF"}
      ></rect>

      <path
        d={"M15 10H5"}
        stroke={"#7F56D9"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <rect
        x={".5"}
        y={".5"}
        width={"19"}
        height={"19"}
        rx={"5.5"}
        stroke={"#7F56D9"}
      ></rect>
    </svg>
  );
}

export default BoxMinussvgIcon;
/* prettier-ignore-end */
