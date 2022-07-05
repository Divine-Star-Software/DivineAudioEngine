import { ElementTree, ElementTreeData } from "../../libs/index.js";
import { HomeScreen } from "../home/home.js";
import { MusicScreen } from "../Music/music.js";
import { SettingsScreen } from "../settings/settings.js";
import { SFXScreen } from "../SFX/sfx.js";

const cascadeProps = {
  currentScreen: "home",
};
const [cascade] = ElementTree.cascade(cascadeProps);

const homeScreenButton = (
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
        origin: cascadeProps,
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

export const CreateMainScreen = (): ElementTreeData => {
  return [
    {
      type: "div",
      attrs: {
        className: "main-screen",
      },
      children: [
        {
          type: "div",
          attrs: {
            className: "home-screen-button",
          },
          children: [
            homeScreenButton(
              "home",
              () => {
                cascadeProps.currentScreen = "home";
                cascade();
              },
              true
            ),
            homeScreenButton("sfx", () => {
              cascadeProps.currentScreen = "sfx";
              cascade();
            }),
            homeScreenButton("music", () => {
              cascadeProps.currentScreen = "music";
              cascade();
            }),
            homeScreenButton("settings", () => {
              cascadeProps.currentScreen = "settings";
              cascade();
            }),
          ],
        },
        {
          type: "div",
          attrs: {
            className: "screen-container",
          },
          children: [
            HomeScreen(cascadeProps),
            SFXScreen(cascadeProps),
            MusicScreen(cascadeProps),
            SettingsScreen(cascadeProps),
          ],
        },
      ],
    },
  ];
};
