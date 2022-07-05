import { ElementTreeData } from "../../libs/index";

export const MusicScreen = (cascadeProps: any): ElementTreeData => {
  return [
    {
      type: "div",
      attrs: {
        className: "screen screen-inactive",
      },
      cascade: {
        origin: cascadeProps,
        receiver: (elm, props) => {
          if (cascadeProps.currentScreen == "music") {
            elm.classList.replace("screen-inactive", "screen-active");
          } else {
            elm.classList.replace("screen-active", "screen-inactive");
          }
        },
      },
      children: [
        {
          type: "h1",
          attrs: {
            className: "screen-title",
          },
          text: "music",
        },
      ],
    },
  ];
};
