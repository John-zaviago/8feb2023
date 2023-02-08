// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gVLjp5jEanpB9JmP1wfhu5
// Component: t50HH_W00Q
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "antd/lib/button"; // plasmic-import: kv6Mk_JNYw/codeComponent
import Button2 from "../../Button"; // plasmic-import: OiEpCGxwidZ/component
import { TableWrapper } from "@plasmicpkgs/antd/skinny/registerTable"; // plasmic-import: LF24IrAPbeRN/codeComponent
import { TableColumn } from "@plasmicpkgs/antd/skinny/registerTable"; // plasmic-import: qJFaUEuzy9Ae/codeComponent
import { TableValue } from "@plasmicpkgs/antd/skinny/registerTable"; // plasmic-import: aOob39p1-Dlv/codeComponent
import { Dropdown } from "@plasmicpkgs/antd/skinny/registerDropdown"; // plasmic-import: cv59X4q0WK/codeComponent
import Menu from "antd/lib/menu/index"; // plasmic-import: Iz_hLKpHZDg/codeComponent
import MenuItem from "antd/lib/menu/MenuItem"; // plasmic-import: HZ6EmQgIQJr/codeComponent
import { useScreenVariants as useScreenVariantsjc9Ly7HCoqclv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JC9LY7hCOQCLV/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_zaviago_react_builder.module.css"; // plasmic-import: gVLjp5jEanpB9JmP1wfhu5/projectcss
import sty from "./PlasmicEmailSettings.module.css"; // plasmic-import: t50HH_W00Q/css
import EditsvgIcon from "./icons/PlasmicIcon__Editsvg"; // plasmic-import: hp4GC7HYRS/icon
import IconsvgIcon from "./icons/PlasmicIcon__Iconsvg"; // plasmic-import: ghfrvXPxoN/icon
import ApprovesvgIcon from "./icons/PlasmicIcon__Approvesvg"; // plasmic-import: n9UjLXd7LK/icon
import DotsvgIcon from "./icons/PlasmicIcon__Dotsvg"; // plasmic-import: 1HUfCwX0U/icon
import EllipsissvgIcon from "./icons/PlasmicIcon__Ellipsissvg"; // plasmic-import: BBR0nV4ct8/icon
import framesvgQpMvVUojHj from "./images/framesvg.svg"; // plasmic-import: qpMvVUojHj/picture

export const PlasmicEmailSettings__VariantProps = new Array();

export const PlasmicEmailSettings__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicEmailSettings__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjc9Ly7HCoqclv()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"setting"}
            data-plasmic-override={overrides.setting}
            className={classNames(projectcss.all, sty.setting)}
          >
            <div className={classNames(projectcss.all, sty.column__fy6TP)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__ccpGi)}>
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__xh4C9
                    )}
                  >
                    {"email setting"}
                  </h1>

                  <p.PlasmicImg
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"12px"}
                    loading={"lazy"}
                    src={{
                      src: framesvgQpMvVUojHj,
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </div>
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hpdtb
                )}
              >
                {
                  "Email notifications sent from your business are listed below. Click on an email to configure it."
                }
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.column__gpF4P)}>
              <div className={classNames(projectcss.all, sty.columns___2TrHe)}>
                <div className={classNames(projectcss.all, sty.column__ocfL1)}>
                  <Button
                    data-plasmic-name={"antdButton"}
                    data-plasmic-override={overrides.antdButton}
                    className={classNames("__wab_instance", sty.antdButton)}
                    ghost={false}
                    size={"medium"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kJDgn
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                        "Save"
                      ) : (
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#111827" }}
                          >
                            {"Save"}
                          </span>
                        </React.Fragment>
                      )}
                    </div>
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__hRrNy)}>
                  <Button2
                    className={classNames("__wab_instance", sty.button__i5Kov)}
                    showStartIcon={true}
                    startIcon={
                      <EditsvgIcon
                        className={classNames(projectcss.all, sty.svg___8G0Vd)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ikvSb
                      )}
                    >
                      {"Edit template"}
                    </div>
                  </Button2>
                </div>

                <div className={classNames(projectcss.all, sty.column__rCv6I)}>
                  <Button2
                    className={classNames("__wab_instance", sty.button__gTVhZ)}
                    showStartIcon={true}
                    startIcon={
                      <IconsvgIcon
                        className={classNames(projectcss.all, sty.svg__n8XqK)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tjWra
                      )}
                    >
                      {"Save Changes"}
                    </div>
                  </Button2>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.columns__sax1B)}>
            <div
              data-plasmic-name={"notification"}
              data-plasmic-override={overrides.notification}
              className={classNames(projectcss.all, sty.notification)}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__nbxIz
                )}
              >
                {"email notifications"}
              </h1>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cipU6
                )}
              >
                {"Email notifications sent from WooCommerce are listed below."}
              </div>
            </div>
          </div>

          <TableWrapper
            data-plasmic-name={"antdTable"}
            data-plasmic-override={overrides.antdTable}
            className={classNames("__wab_instance", sty.antdTable)}
            columns={
              <React.Fragment>
                <TableColumn
                  className={classNames(
                    "__wab_instance",
                    sty.antdTableColumn__fYiaS
                  )}
                  columnTemplate={
                    <ph.DataCtxReader>
                      {$ctx => (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__vyp2G
                          )}
                          id={""}
                        >
                          {true ? (
                            <ApprovesvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__qwjvz
                              )}
                              id={""}
                              role={"img"}
                            />
                          ) : null}

                          <TableValue
                            className={classNames(
                              "__wab_instance",
                              sty.antdTableValue__oguYe
                            )}
                          />
                        </p.Stack>
                      )}
                    </ph.DataCtxReader>
                  }
                  dataIndex={"email"}
                  title={"Email"}
                />

                <TableColumn
                  className={classNames(
                    "__wab_instance",
                    sty.antdTableColumn__i78Gk
                  )}
                  columnTemplate={
                    <ph.DataCtxReader>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ivkIj
                          )}
                        >
                          <TableValue
                            className={classNames(
                              "__wab_instance",
                              sty.antdTableValue__kzlh1
                            )}
                          />
                        </div>
                      )}
                    </ph.DataCtxReader>
                  }
                  dataIndex={"contentType"}
                  title={"Content type"}
                />

                <TableColumn
                  className={classNames(
                    "__wab_instance",
                    sty.antdTableColumn__lz0Jo
                  )}
                  columnTemplate={
                    <ph.DataCtxReader>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__yye1G
                          )}
                        >
                          <DotsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__tcKn7
                            )}
                            role={"img"}
                          />

                          <TableValue
                            className={classNames(
                              "__wab_instance",
                              sty.antdTableValue__jjel
                            )}
                          />
                        </div>
                      )}
                    </ph.DataCtxReader>
                  }
                  dataIndex={"Recipients"}
                  title={"Recipient(s)"}
                />

                <TableColumn
                  className={classNames(
                    "__wab_instance",
                    sty.antdTableColumn__gvNoc
                  )}
                  columnTemplate={
                    <ph.DataCtxReader>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__mlxA5
                          )}
                        >
                          <Dropdown
                            data-plasmic-name={"antdDropdown"}
                            data-plasmic-override={overrides.antdDropdown}
                            className={classNames(
                              "__wab_instance",
                              sty.antdDropdown
                            )}
                            overlay={
                              <Menu
                                data-plasmic-name={"antdMenu"}
                                data-plasmic-override={overrides.antdMenu}
                                className={classNames(
                                  "__wab_instance",
                                  sty.antdMenu
                                )}
                              >
                                <MenuItem
                                  data-plasmic-name={"antdMenuItem"}
                                  data-plasmic-override={overrides.antdMenuItem}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.antdMenuItem
                                  )}
                                  key={"menuItemKey"}
                                >
                                  <a
                                    data-plasmic-name={"manage"}
                                    data-plasmic-override={overrides.manage}
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.a,
                                      projectcss.__wab_text,
                                      sty.manage
                                    )}
                                    href={`/email-new-order`}
                                  >
                                    {"Manage"}
                                  </a>
                                </MenuItem>
                              </Menu>
                            }
                            trigger={"click"}
                          >
                            <EllipsissvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__zOnc
                              )}
                              role={"img"}
                            />
                          </Dropdown>
                        </div>
                      )}
                    </ph.DataCtxReader>
                  }
                  dataIndex={""}
                  title={""}
                />
              </React.Fragment>
            }
            items={[
              {
                email: "New Order",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Cancelled order",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Failed order",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Order on-hold",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Processing order",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Completed order",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Refunded order",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Customer invoice / Order details",
                contentType: "Text/html",
                Recipients: "Customer"
              },
              {
                email: "Customer note",
                contentType: "Text/html",
                Recipients: "Customer"
              }
            ]}
            size={"large"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "setting",
    "img",
    "antdButton",
    "notification",
    "antdTable",
    "antdDropdown",
    "antdMenu",
    "antdMenuItem",
    "manage"
  ],

  setting: ["setting", "img", "antdButton"],
  img: ["img"],
  antdButton: ["antdButton"],
  notification: ["notification"],
  antdTable: [
    "antdTable",
    "antdDropdown",
    "antdMenu",
    "antdMenuItem",
    "manage"
  ],

  antdDropdown: ["antdDropdown", "antdMenu", "antdMenuItem", "manage"],
  antdMenu: ["antdMenu", "antdMenuItem", "manage"],
  antdMenuItem: ["antdMenuItem", "manage"],
  manage: ["manage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicEmailSettings__ArgProps,
          internalVariantPropNames: PlasmicEmailSettings__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEmailSettings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmailSettings";
  } else {
    func.displayName = `PlasmicEmailSettings.${nodeName}`;
  }
  return func;
}

export const PlasmicEmailSettings = Object.assign(
  // Top-level PlasmicEmailSettings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    setting: makeNodeComponent("setting"),
    img: makeNodeComponent("img"),
    antdButton: makeNodeComponent("antdButton"),
    notification: makeNodeComponent("notification"),
    antdTable: makeNodeComponent("antdTable"),
    antdDropdown: makeNodeComponent("antdDropdown"),
    antdMenu: makeNodeComponent("antdMenu"),
    antdMenuItem: makeNodeComponent("antdMenuItem"),
    manage: makeNodeComponent("manage"),
    // Metadata about props expected for PlasmicEmailSettings
    internalVariantProps: PlasmicEmailSettings__VariantProps,
    internalArgProps: PlasmicEmailSettings__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "recipients",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEmailSettings;
/* prettier-ignore-end */
