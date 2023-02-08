// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
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
          "M16.393 10c0 .691-.544 1.25-1.214 1.25H9.715v5.625c0 .691-.544 1.25-1.215 1.25-.67 0-1.214-.559-1.214-1.25V11.25H1.822c-.67 0-1.215-.559-1.215-1.25s.544-1.25 1.215-1.25h5.464V3.125c0-.69.544-1.25 1.214-1.25.67 0 1.215.56 1.215 1.25V8.75h5.464c.671 0 1.214.559 1.214 1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsvgIcon;
/* prettier-ignore-end */
