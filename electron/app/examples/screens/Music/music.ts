import { ElementTreeData } from "../../libs/index";

export const MusicScreen = (cascadeProps: any): ElementTreeData => {
  return [
    {
      type: "div",
      attrs : {
        className : "screen-inactive"
      },
      cascade: {
        origin: cascadeProps,
        receiver: (elm, props) => {
          if (cascadeProps.currentScreen == "music") {
            elm.className = "screen-active";
        } else {
          elm.className = "screen-inactive";
        }
        },
      },
      children: [
        {
          type: "h1",
          attrs : {
            className : "screen-title"
          },
          text: "music",
        },
      ],
    },
  ];
};
