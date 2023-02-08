// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function XmarksvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.484 1.469L8.36 2.594l3.047 3.047 1.125-1.125a1.514 1.514 0 000-2.133l-.914-.914a1.514 1.514 0 00-2.133 0zM7.82 3.133l-5.46 5.46c-.235.235-.422.54-.516.868l-.82 2.836a.478.478 0 00.14.539c.14.164.352.21.54.164l2.835-.844a2.04 2.04 0 00.867-.515l5.461-5.461L7.82 3.133z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XmarksvgIcon;
/* prettier-ignore-end */
