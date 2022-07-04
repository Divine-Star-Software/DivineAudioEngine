import { ElementTree, ElementTreeData } from "../../libs/index.js";
import { _3dsfx } from "./3d/3d.js";
import { sfxSettings } from "./settings/settings.js";

ElementTree.linkCSS(import.meta.url, "sfx.css");

const sfxCascadeProps = {
  currentScreen: "settings",
};

const [cascade] = ElementTree.cascade(sfxCascadeProps);

const addSFXScreenButton = (
  text: string,
  onClick: Function,
  active = false
): ElementTreeData => {
  let className = "";
  if (active) {
    className = "active";
  }
  return [
    {
      type: "button",
      text: text,
      attrs: {
        className,
      },
      events: {
        onClick: onClick,
      },
      cascade: {
        origin: sfxCascadeProps,
        receiver: (elm, props) => {
          if (props.currentScreen == text) {
            elm.className = "active";
          } else {
            elm.className = "";
          }
        },
      },
    },
  ];
};

export const SFXScreen = (cascadeProps: any): ElementTreeData => {
  return [
    {
      type: "div",
      attrs: {
        className: "screen-inactive",
      },
      cascade: {
        origin: cascadeProps,
        receiver: (elm, props) => {
          if (cascadeProps.currentScreen == "sfx") {
            elm.className = "screen-active";
          } else {
            elm.className = "screen-inactive";
          }
        },
      },
      children: [
        {
          type: "div",
          attrs: {
            className: "sfx-screen-buttons",
          },
          children: [
            addSFXScreenButton(
              "settings",
              () => {
                sfxCascadeProps.currentScreen = "settings";
                cascade();
              },
              true
            ),
            addSFXScreenButton("3d sfx", () => {
              sfxCascadeProps.currentScreen = "3d sfx";
              cascade();
            }),
            addSFXScreenButton("sfx", () => {
              sfxCascadeProps.currentScreen = "sfx";
              cascade();
            }),
          ],
        },
        {
          type: "div",
          attrs: {
            className: "sfx-screens",
          },
          children: [sfxSettings(sfxCascadeProps), _3dsfx(sfxCascadeProps)],
        },
      ],
    },
  ];
};
