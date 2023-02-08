// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gVLjp5jEanpB9JmP1wfhu5
// Component: KEqtb6YfMi
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_zaviago_react_builder.module.css"; // plasmic-import: gVLjp5jEanpB9JmP1wfhu5/projectcss
import sty from "./PlasmicButtonsWithIcon.module.css"; // plasmic-import: KEqtb6YfMi/css

export const PlasmicButtonsWithIcon__VariantProps = new Array();

export const PlasmicButtonsWithIcon__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicButtonsWithIcon__RenderFunc(props) {
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
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButtonsWithIcon__ArgProps,
          internalVariantPropNames: PlasmicButtonsWithIcon__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButtonsWithIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonsWithIcon";
  } else {
    func.displayName = `PlasmicButtonsWithIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonsWithIcon = Object.assign(
  // Top-level PlasmicButtonsWithIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButtonsWithIcon
    internalVariantProps: PlasmicButtonsWithIcon__VariantProps,
    internalArgProps: PlasmicButtonsWithIcon__ArgProps
  }
);

export default PlasmicButtonsWithIcon;
/* prettier-ignore-end */
