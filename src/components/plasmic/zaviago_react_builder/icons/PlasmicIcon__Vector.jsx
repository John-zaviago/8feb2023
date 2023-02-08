// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
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

      <path
        opacity={".4"}
        d={
          "M24 12c0 1.02-.827 1.847-1.846 1.847h-8.308v8.307a1.845 1.845 0 11-3.692 0v-8.307H1.846a1.846 1.846 0 110-3.693h8.308V1.847a1.846 1.846 0 113.692 0v8.307h8.308C23.175 10.154 24 10.98 24 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
