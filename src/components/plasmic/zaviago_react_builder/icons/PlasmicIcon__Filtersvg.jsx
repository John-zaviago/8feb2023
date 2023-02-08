// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FiltersvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#GxoXaMAtFa)"} fill={"#000"}>
        <path
          d={
            "M15.938 2.125a1.062 1.062 0 110 2.125h-2.126a1.061 1.061 0 110-2.125h2.126zM10.625 8.5c0-.588.475-1.063 1.063-1.063h4.25a1.061 1.061 0 110 2.125h-4.25A1.061 1.061 0 0110.624 8.5zm0 5.313c0-.588.475-1.063 1.063-1.063h4.25a1.061 1.061 0 110 2.125h-4.25a1.061 1.061 0 01-1.063-1.063z"
          }
        ></path>

        <path
          opacity={".4"}
          d={
            "M.115 2.913c.213-.48.689-.788 1.183-.788h9.061c.525 0 1 .309 1.212.788.186.48.127 1.038-.225 1.43L7.969 8.095v5.717a1.062 1.062 0 01-1.7.85L4.144 13.07a1.055 1.055 0 01-.425-.85V8.095L.34 4.343a1.33 1.33 0 01-.226-1.43z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"GxoXaMAtFa"}>
          <path fill={"#fff"} d={"M0 0h17v17H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FiltersvgIcon;
/* prettier-ignore-end */
