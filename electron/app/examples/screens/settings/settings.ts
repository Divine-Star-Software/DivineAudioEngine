import { ElementTreeData } from "../../libs/index";
import { settingsForm } from "./settingsForm.js";

export const SettingsScreen = (cascadeProps: any): ElementTreeData => {
  return [
    {
      type: "div",
      attrs: {
        className: "screen screen-inactive",
      },
      cascade: {
        origin: cascadeProps,
        receiver: (elm, props) => {
          if (cascadeProps.currentScreen == "settings") {
            elm.classList.replace("screen-inactive", "screen-active");
          } else {
            elm.classList.replace("screen-active", "screen-inactive");
          }
        },
      },
      children: [
        settingsForm()
      ],
    },
  ];
};
