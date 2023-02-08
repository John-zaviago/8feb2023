// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M40 20a3.077 3.077 0 01-3.077 3.078H23.077v13.846A3.075 3.075 0 0120 40a3.075 3.075 0 01-3.077-3.076V23.078H3.077a3.077 3.077 0 110-6.154h13.846V3.078a3.077 3.077 0 116.154 0v13.846h13.846A3.072 3.072 0 0140 20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
