// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EllipsissvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 4"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.656 1.75c0 .848-.71 1.531-1.531 1.531A1.529 1.529 0 01.594 1.75c0-.82.683-1.531 1.531-1.531.82 0 1.531.71 1.531 1.531zm4.375 0c0 .848-.71 1.531-1.531 1.531A1.529 1.529 0 014.969 1.75C4.969.93 5.652.219 6.5.219c.82 0 1.531.71 1.531 1.531zm2.844 1.531A1.529 1.529 0 019.344 1.75c0-.82.683-1.531 1.531-1.531.82 0 1.531.71 1.531 1.531 0 .848-.71 1.531-1.531 1.531z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EllipsissvgIcon;
/* prettier-ignore-end */
