// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SettingsvgIcon(props) {
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

      <circle
        cx={"12"}
        cy={"12"}
        r={"12"}
        fill={"#000"}
        fillOpacity={".4"}
      ></circle>

      <g clipPath={"url(#ol3zpFs6Aa)"} fill={"#000"}>
        <path
          d={
            "M17.622 9.905a.532.532 0 01-.148.576l-1.015.924a4.462 4.462 0 010 1.19l1.015.924a.53.53 0 01.148.576 5.946 5.946 0 01-.368.804l-.11.19a6.177 6.177 0 01-.518.734.536.536 0 01-.575.159l-1.305-.417a5.123 5.123 0 01-1.031.598l-.293 1.338a.562.562 0 01-.427.417 6.126 6.126 0 01-1.992 0 .562.562 0 01-.427-.417l-.293-1.338a4.604 4.604 0 01-1.03-.598l-1.305.417a.535.535 0 01-.575-.16 6.158 6.158 0 01-.518-.733l-.11-.19a5.843 5.843 0 01-.37-.804.533.533 0 01.15-.576l1.013-.924a4.535 4.535 0 010-1.19l-1.014-.924a.531.531 0 01-.148-.576 5.59 5.59 0 01.37-.804l.109-.19a6 6 0 01.518-.732.532.532 0 01.575-.16l1.304.416a4.522 4.522 0 011.031-.597l.293-1.338a.532.532 0 01.427-.418 6.102 6.102 0 011.992 0c.216.036.38.205.427.418l.293 1.338a5.02 5.02 0 011.031.597l1.306-.416a.533.533 0 01.574.16 6 6 0 01.518.732l.11.19c.14.255.265.525.368.804zm-5.623 3.97a1.88 1.88 0 001.875-1.896c0-1.015-.839-1.875-1.875-1.875s-1.875.86-1.875 1.875A1.88 1.88 0 0012 13.875z"
          }
        ></path>

        <path
          opacity={".4"}
          d={"M13.125 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"}
        ></path>
      </g>

      <defs>
        <clipPath id={"ol3zpFs6Aa"}>
          <path
            fill={"#fff"}
            transform={"translate(6 6)"}
            d={"M0 0h12v12H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SettingsvgIcon;
/* prettier-ignore-end */
