// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EditsvgIcon(props) {
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

      <path
        d={
          "M15.328.846a2.187 2.187 0 013.094 0l.73.732c.856.854.856 2.24 0 3.094L17.98 5.848 14.152 2.02 15.328.846zm1.77 5.885l-6.54 6.535a2.165 2.165 0 01-.855.53l-3.469 1.157c-.37.11-.707.024-.96-.261-.25-.22-.336-.59-.227-.926l1.156-3.47a2.2 2.2 0 01.531-.855l6.536-6.537 3.828 3.827z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M0 6.25A3.728 3.728 0 013.75 2.5H7.5a1.25 1.25 0 110 2.5H3.75c-.69 0-1.25.559-1.25 1.25v10c0 .691.56 1.25 1.25 1.25h10A1.25 1.25 0 0015 16.25V12.5a1.25 1.25 0 112.5 0v3.75c0 2.07-1.68 3.75-3.75 3.75h-10A3.75 3.75 0 010 16.25v-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EditsvgIcon;
/* prettier-ignore-end */
