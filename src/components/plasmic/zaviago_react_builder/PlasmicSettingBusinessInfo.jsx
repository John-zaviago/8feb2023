// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gVLjp5jEanpB9JmP1wfhu5
// Component: _wX2WPNtDD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: OiEpCGxwidZ/component
import Input from "antd/lib/input"; // plasmic-import: tO9wrxr8Nbb/codeComponent
import Select from "../../Select"; // plasmic-import: I-YmR_8FdnC/component
import Switch from "antd/lib/switch"; // plasmic-import: tRueht1jub/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_zaviago_react_builder.module.css"; // plasmic-import: gVLjp5jEanpB9JmP1wfhu5/projectcss
import sty from "./PlasmicSettingBusinessInfo.module.css"; // plasmic-import: _wX2WPNtDD/css

export const PlasmicSettingBusinessInfo__VariantProps = new Array();

export const PlasmicSettingBusinessInfo__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSettingBusinessInfo__RenderFunc(props) {
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
          <div className={classNames(projectcss.all, sty.columns__rcR1T)}>
            <div className={classNames(projectcss.all, sty.column__jPsq7)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Business info"}
              </h1>
            </div>

            <div className={classNames(projectcss.all, sty.column__wLip)}>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                {"Save Changes"}
              </Button>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.columns__vr4NF)}>
            <div className={classNames(projectcss.all, sty.column__omwL7)}>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__erab
                )}
              >
                {"address."}
              </h2>

              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__mgqAn
                )}
              >
                {
                  "The address and information of your store that will show on your invoice and other places in system regarding the store information."
                }
              </h3>
            </div>

            <div className={classNames(projectcss.all, sty.column__ritU8)}>
              <div className={classNames(projectcss.all, sty.columns___8Fqw)}>
                <div className={classNames(projectcss.all, sty.column__z5Qz)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__oFr7R
                    )}
                  >
                    {"Store address"}
                  </h3>

                  <Input
                    data-plasmic-name={"antdInput"}
                    data-plasmic-override={overrides.antdInput}
                    allowClear={false}
                    aria-label={"Title"}
                    bordered={true}
                    className={classNames("__wab_instance", sty.antdInput)}
                    defaultValue={""}
                    id={"Title"}
                    name={"title"}
                    placeholder={"Add Store Address line 1"}
                    size={"large"}
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__cjTd7)}>
                <div className={classNames(projectcss.all, sty.column__n9Lba)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__r2TAk
                    )}
                  >
                    {"Store Address line 2"}
                  </h3>

                  <Input
                    data-plasmic-name={"antdInput2"}
                    data-plasmic-override={overrides.antdInput2}
                    allowClear={false}
                    aria-label={"Title"}
                    bordered={true}
                    className={classNames("__wab_instance", sty.antdInput2)}
                    defaultValue={""}
                    id={"Title"}
                    name={"title"}
                    placeholder={"Jacket, Sunglasses..."}
                    size={"large"}
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__zmgbZ)}>
                <div className={classNames(projectcss.all, sty.column__pxTvy)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__gt6Gn
                    )}
                  >
                    {"City"}
                  </h3>

                  <Input
                    data-plasmic-name={"antdInput3"}
                    data-plasmic-override={overrides.antdInput3}
                    allowClear={false}
                    aria-label={"Title"}
                    bordered={true}
                    className={classNames("__wab_instance", sty.antdInput3)}
                    defaultValue={""}
                    id={"Title"}
                    name={"title"}
                    placeholder={"Add City"}
                    size={"large"}
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__rGrh5)}>
                <div className={classNames(projectcss.all, sty.column__cfy2M)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3___46CcV
                    )}
                  >
                    {"Country / State"}
                  </h3>

                  <Select
                    className={classNames("__wab_instance", sty.select__yOxq8)}
                    placeholder={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__c1Aih
                        )}
                      >
                        {"Select…"}
                      </div>
                    }
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__gkA7U)}>
                <div className={classNames(projectcss.all, sty.column__kwa2L)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__nodf
                    )}
                  >
                    {"Postcode"}
                  </h3>

                  <Input
                    data-plasmic-name={"antdInput5"}
                    data-plasmic-override={overrides.antdInput5}
                    allowClear={false}
                    aria-label={"Title"}
                    bordered={true}
                    className={classNames("__wab_instance", sty.antdInput5)}
                    defaultValue={""}
                    id={"Title"}
                    name={"title"}
                    placeholder={"Add Postcode"}
                    size={"large"}
                  />
                </div>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__poRsx
                )}
              >
                {"pricing"}
              </div>

              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__vYC
                )}
              >
                {"Configure the pricing for this product."}
              </h3>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fsCuW)}
              >
                <Switch
                  autoFocus={true}
                  className={classNames(
                    "__wab_instance",
                    sty.antdSwitch__bQcEj
                  )}
                  defaultChecked={false}
                  disabled={false}
                  loading={false}
                  size={"default"}
                />

                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___8O9V
                  )}
                >
                  {"Instant discount"}
                </h3>
              </p.Stack>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.columns__n5RxV)}>
            <div className={classNames(projectcss.all, sty.column___5VBfb)}>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__tzM0
                )}
              >
                {"general options."}
              </h2>

              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__l6Xv
                )}
              >
                {
                  "Change general option such as selling locations, shipping locations, enable / disable taxes and coupons usages."
                }
              </h3>
            </div>

            <div className={classNames(projectcss.all, sty.column__ulCRo)}>
              <div className={classNames(projectcss.all, sty.columns___7Ceh4)}>
                <div className={classNames(projectcss.all, sty.column__fcKVk)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__oWNvQ
                    )}
                  >
                    {"Selling location (s)"}
                  </h3>

                  <Select
                    className={classNames("__wab_instance", sty.select__u2OoR)}
                    placeholder={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__olayU
                        )}
                      >
                        {"Add Selling location (s)"}
                      </div>
                    }
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns___9Eusz)}>
                <div className={classNames(projectcss.all, sty.column__wQsz)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3___12JdW
                    )}
                  >
                    {"Shipping locations (s)"}
                  </h3>

                  <Select
                    className={classNames("__wab_instance", sty.select__rpBy)}
                    placeholder={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hRwnp
                        )}
                      >
                        {"Add Shipping location (s)"}
                      </div>
                    }
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__lWGc)}>
                <div className={classNames(projectcss.all, sty.column__kasmx)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3___8O1Go
                    )}
                  >
                    {"Default customer location"}
                  </h3>

                  <Select
                    className={classNames("__wab_instance", sty.select__nCw9N)}
                    placeholder={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5XFf8
                        )}
                      >
                        {"Add Default customer location"}
                      </div>
                    }
                  />
                </div>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xrdBl
                )}
              >
                {"Enable taxes"}
              </div>

              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__gdYRd
                )}
              >
                {"Configure the pricing for this product."}
              </h3>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___4JmUj)}
              >
                <Switch
                  autoFocus={true}
                  className={classNames("__wab_instance", sty.antdSwitch__s6C)}
                  defaultChecked={false}
                  disabled={false}
                  loading={false}
                  size={"default"}
                />

                <svg
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />

                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__pvOlg
                  )}
                >
                  {"Enable tax rates and calculations"}
                </h3>
              </p.Stack>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eniH
                )}
              >
                {"Enable coupons"}
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___96BF1)}
              >
                <Switch
                  autoFocus={true}
                  className={classNames(
                    "__wab_instance",
                    sty.antdSwitch___8DeIe
                  )}
                  defaultChecked={false}
                  disabled={false}
                  loading={false}
                  size={"default"}
                />

                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__awy4J
                  )}
                >
                  {"Enable the use of coupon codes"}
                </h3>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vCmAy)}
              >
                <Switch
                  autoFocus={true}
                  className={classNames(
                    "__wab_instance",
                    sty.antdSwitch___8Tpe
                  )}
                  defaultChecked={false}
                  disabled={false}
                  loading={false}
                  size={"default"}
                />

                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__pDbkA
                  )}
                >
                  {"Calculate coupon discounts sequentially"}
                </h3>
              </p.Stack>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.columns__ipPmV)}>
            <div className={classNames(projectcss.all, sty.column__nt5Zb)}>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__b0OmS
                )}
              >
                {"currency options."}
              </h2>

              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__oIlDm
                )}
              >
                {
                  "Change general option such as selling locations, shipping locations, enable / disable taxes and coupons usages."
                }
              </h3>
            </div>

            <div className={classNames(projectcss.all, sty.column__rpJg5)}>
              <div className={classNames(projectcss.all, sty.columns__xdXBl)}>
                <div className={classNames(projectcss.all, sty.column__pWlwB)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__vY3Qm
                    )}
                  >
                    {"Currency"}
                  </h3>

                  <Select
                    className={classNames("__wab_instance", sty.select__lB190)}
                    placeholder={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__iFslZ
                        )}
                      >
                        {"Add Currency"}
                      </div>
                    }
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__oYoM8)}>
                <div className={classNames(projectcss.all, sty.column___6Unq0)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__bwUz4
                    )}
                  >
                    {"Currency"}
                  </h3>

                  <Select
                    className={classNames("__wab_instance", sty.select__kugi1)}
                    placeholder={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__moHkT
                        )}
                      >
                        {"Add Currency position"}
                      </div>
                    }
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__v31V3)}>
                <div className={classNames(projectcss.all, sty.column__bsPyZ)}>
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3___2AibN
                    )}
                  >
                    {"Number of decimals"}
                  </h3>

                  <Input
                    data-plasmic-name={"antdInput6"}
                    data-plasmic-override={overrides.antdInput6}
                    allowClear={false}
                    aria-label={"Title"}
                    bordered={true}
                    className={classNames("__wab_instance", sty.antdInput6)}
                    defaultValue={""}
                    id={"Title"}
                    name={"title"}
                    placeholder={"100..."}
                    size={"large"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "h1",
    "button",
    "antdInput",
    "antdInput2",
    "antdInput3",
    "antdInput5",
    "svg",
    "antdInput6"
  ],

  h1: ["h1"],
  button: ["button"],
  antdInput: ["antdInput"],
  antdInput2: ["antdInput2"],
  antdInput3: ["antdInput3"],
  antdInput5: ["antdInput5"],
  svg: ["svg"],
  antdInput6: ["antdInput6"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSettingBusinessInfo__ArgProps,
          internalVariantPropNames: PlasmicSettingBusinessInfo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSettingBusinessInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSettingBusinessInfo";
  } else {
    func.displayName = `PlasmicSettingBusinessInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicSettingBusinessInfo = Object.assign(
  // Top-level PlasmicSettingBusinessInfo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    antdInput: makeNodeComponent("antdInput"),
    antdInput2: makeNodeComponent("antdInput2"),
    antdInput3: makeNodeComponent("antdInput3"),
    antdInput5: makeNodeComponent("antdInput5"),
    svg: makeNodeComponent("svg"),
    antdInput6: makeNodeComponent("antdInput6"),
    // Metadata about props expected for PlasmicSettingBusinessInfo
    internalVariantProps: PlasmicSettingBusinessInfo__VariantProps,
    internalArgProps: PlasmicSettingBusinessInfo__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSettingBusinessInfo;
/* prettier-ignore-end */
