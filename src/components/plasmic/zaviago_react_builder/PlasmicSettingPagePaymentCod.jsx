// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gVLjp5jEanpB9JmP1wfhu5
// Component: UMqlp2mbKI
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: OiEpCGxwidZ/component
import Button2 from "antd/lib/button"; // plasmic-import: kv6Mk_JNYw/codeComponent
import Input from "antd/lib/input"; // plasmic-import: tO9wrxr8Nbb/codeComponent
import TextArea from "antd/lib/input/TextArea"; // plasmic-import: ZJIPHLoTjkN/codeComponent
import Select from "../../Select"; // plasmic-import: I-YmR_8FdnC/component
import Checkbox from "antd/lib/checkbox/Checkbox"; // plasmic-import: SAEWraOT2YV/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_zaviago_react_builder.module.css"; // plasmic-import: gVLjp5jEanpB9JmP1wfhu5/projectcss
import sty from "./PlasmicSettingPagePaymentCod.module.css"; // plasmic-import: UMqlp2mbKI/css
import IconsvgIcon from "./icons/PlasmicIcon__Iconsvg"; // plasmic-import: ghfrvXPxoN/icon
import XmarksvgIcon from "./icons/PlasmicIcon__Xmarksvg"; // plasmic-import: 7zeOQd0aRb/icon
import framesvgQpMvVUojHj from "./images/framesvg.svg"; // plasmic-import: qpMvVUojHj/picture

export const PlasmicSettingPagePaymentCod__VariantProps = new Array();

export const PlasmicSettingPagePaymentCod__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSettingPagePaymentCod__RenderFunc(props) {
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
          <div
            data-plasmic-name={"cashOnDelivery"}
            data-plasmic-override={overrides.cashOnDelivery}
            className={classNames(projectcss.all, sty.cashOnDelivery)}
          >
            <div className={classNames(projectcss.all, sty.column__c4V7Y)}>
              <Button
                className={classNames("__wab_instance", sty.button__zb07O)}
                color={"softSand"}
                endIcon={
                  <XmarksvgIcon
                    className={classNames(projectcss.all, sty.svg__h5N55)}
                    role={"img"}
                  />
                }
                shape={"rounded"}
                showEndIcon={true}
                startIcon={
                  <IconsvgIcon
                    className={classNames(projectcss.all, sty.svg__nmbBs)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eAqu5
                  )}
                >
                  {"Edit"}
                </div>
              </Button>

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
                {"cash on Delivery."}
              </h1>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9Wmre
                )}
              >
                {
                  "Take payments in person via BACS. More commonly known as direct bank/wire transfer."
                }
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.column__gtQoA)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__jlzRy)}>
                  <Button2
                    className={classNames(
                      "__wab_instance",
                      sty.antdButton__xRjMp
                    )}
                    size={"medium"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qkTg6
                      )}
                    >
                      {"Back"}
                    </div>
                  </Button2>
                </div>

                <div className={classNames(projectcss.all, sty.column__sofdo)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__smvy4)}
                    showStartIcon={true}
                    startIcon={
                      <IconsvgIcon
                        className={classNames(projectcss.all, sty.svg___7UZm4)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__z8Be
                      )}
                    >
                      {"Save Changes"}
                    </div>
                  </Button>
                </div>
              </p.Stack>
            </div>
          </div>

          <div
            data-plasmic-name={"information"}
            data-plasmic-override={overrides.information}
            className={classNames(projectcss.all, sty.information)}
          >
            <div className={classNames(projectcss.all, sty.column__lT4ZA)}>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2___7DRlj
                )}
              >
                {"information"}
              </h2>

              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__eSqiO
                )}
              >
                {"This information showing to your user."}
              </h3>
            </div>
          </div>

          <div
            data-plasmic-name={"titleStatus"}
            data-plasmic-override={overrides.titleStatus}
            className={classNames(projectcss.all, sty.titleStatus)}
          >
            <div className={classNames(projectcss.all, sty.column__e7Ho)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__d7MFt)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__yVlnr
                  )}
                >
                  {"Title"}
                </h3>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__eMoGs)}
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
              </p.Stack>

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
                placeholder={"Direct bank transfer"}
                size={"large"}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__obiVh)}>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__nwHs
                )}
              >
                {"status"}
              </h2>

              <Button2
                className={classNames("__wab_instance", sty.antdButton__b2Or)}
                danger={false}
                shape={"default"}
                size={"large"}
                type={"default"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l50Mm
                  )}
                >
                  {"Enable"}
                </div>
              </Button2>
            </div>
          </div>

          <div
            data-plasmic-name={"description"}
            data-plasmic-override={overrides.description}
            className={classNames(projectcss.all, sty.description)}
          >
            <div className={classNames(projectcss.all, sty.column__pFx2B)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jZdvx)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__oVb2J
                  )}
                >
                  {"Description"}
                </h3>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__oAUxo)}
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
              </p.Stack>

              <TextArea
                allowClear={false}
                aria-label={"Pay with cash upon delivery."}
                aria-labelledby={"Pay with cash upon delivery."}
                className={classNames(
                  "__wab_instance",
                  sty.antdInputTextArea__urYgQ
                )}
                name={"paywithcod"}
                placeholder={
                  "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                }
                showCount={false}
              />
            </div>
          </div>

          <div
            data-plasmic-name={"instructions2"}
            data-plasmic-override={overrides.instructions2}
            className={classNames(projectcss.all, sty.instructions2)}
          >
            <div className={classNames(projectcss.all, sty.column__hd6Z)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__apOu1)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___6PlSy
                  )}
                >
                  {"Instructions"}
                </h3>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__hgbUe)}
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
              </p.Stack>

              <TextArea
                allowClear={false}
                aria-label={"Pay with cash upon delivery."}
                aria-labelledby={"Pay with cash upon delivery."}
                className={classNames(
                  "__wab_instance",
                  sty.antdInputTextArea__zw9Mc
                )}
                name={"paywithcod"}
                placeholder={"Add instructions"}
                showCount={false}
              />
            </div>
          </div>

          <div
            data-plasmic-name={"enableShipping"}
            data-plasmic-override={overrides.enableShipping}
            className={classNames(projectcss.all, sty.enableShipping)}
          >
            <div className={classNames(projectcss.all, sty.column__lc0Ze)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dlqc5)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__yk2Ta
                  )}
                >
                  {"Enable for shipping methods"}
                </h3>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__sXsnp)}
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
              </p.Stack>

              <Select
                data-plasmic-name={"select"}
                data-plasmic-override={overrides.select}
                className={classNames("__wab_instance", sty.select)}
                placeholder={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5AWfl
                    )}
                  >
                    {"Select shipping methods"}
                  </div>
                }
              />
            </div>
          </div>

          <div
            data-plasmic-name={"acceptVirtualOrders"}
            data-plasmic-override={overrides.acceptVirtualOrders}
            className={classNames(projectcss.all, sty.acceptVirtualOrders)}
          >
            <div className={classNames(projectcss.all, sty.column___4DYvi)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eJwEh)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__zrEmn
                  )}
                >
                  {"Accept for virtual orders"}
                </h3>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___8SgYz)}
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
              </p.Stack>

              <Checkbox
                data-plasmic-name={"antdCheckbox"}
                data-plasmic-override={overrides.antdCheckbox}
                className={classNames("__wab_instance", sty.antdCheckbox)}
                defaultChecked={false}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iwC4F
                  )}
                >
                  {"Accept COD if the order is virtual"}
                </div>
              </Checkbox>
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
    "cashOnDelivery",
    "h1",
    "columns",
    "information",
    "titleStatus",
    "antdInput6",
    "description",
    "instructions2",
    "enableShipping",
    "select",
    "acceptVirtualOrders",
    "antdCheckbox"
  ],

  cashOnDelivery: ["cashOnDelivery", "h1", "columns"],
  h1: ["h1"],
  columns: ["columns"],
  information: ["information"],
  titleStatus: ["titleStatus", "antdInput6"],
  antdInput6: ["antdInput6"],
  description: ["description"],
  instructions2: ["instructions2"],
  enableShipping: ["enableShipping", "select"],
  select: ["select"],
  acceptVirtualOrders: ["acceptVirtualOrders", "antdCheckbox"],
  antdCheckbox: ["antdCheckbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSettingPagePaymentCod__ArgProps,
          internalVariantPropNames: PlasmicSettingPagePaymentCod__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSettingPagePaymentCod__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSettingPagePaymentCod";
  } else {
    func.displayName = `PlasmicSettingPagePaymentCod.${nodeName}`;
  }
  return func;
}

export const PlasmicSettingPagePaymentCod = Object.assign(
  // Top-level PlasmicSettingPagePaymentCod renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cashOnDelivery: makeNodeComponent("cashOnDelivery"),
    h1: makeNodeComponent("h1"),
    columns: makeNodeComponent("columns"),
    information: makeNodeComponent("information"),
    titleStatus: makeNodeComponent("titleStatus"),
    antdInput6: makeNodeComponent("antdInput6"),
    description: makeNodeComponent("description"),
    instructions2: makeNodeComponent("instructions2"),
    enableShipping: makeNodeComponent("enableShipping"),
    select: makeNodeComponent("select"),
    acceptVirtualOrders: makeNodeComponent("acceptVirtualOrders"),
    antdCheckbox: makeNodeComponent("antdCheckbox"),
    // Metadata about props expected for PlasmicSettingPagePaymentCod
    internalVariantProps: PlasmicSettingPagePaymentCod__VariantProps,
    internalArgProps: PlasmicSettingPagePaymentCod__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSettingPagePaymentCod;
/* prettier-ignore-end */
