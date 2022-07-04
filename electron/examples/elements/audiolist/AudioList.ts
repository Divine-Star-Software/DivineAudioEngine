import { DivineAudioEngine, DAE } from "../../../code/DivineAudioEngine.js";
import { ElementTree, ElementTreeData } from "../../libs/index.js";
import { Div } from "../div.js";
export const addAudioTrack = (
  name: string,
  id: string,
  onClick: (DAE: DivineAudioEngine, id: string) => void
): ElementTreeData => {
  const cascadeProps = { open: false };
  const [cascade] = ElementTree.cascade(cascadeProps);
  const data = DAE.sfx.getSFXData(id);
  const dataString = JSON.stringify(data, undefined, 5);
  return Div("audio-track", [
    {
      type: "p",
      attrs: {
        className: "audio-track-title",
      },
      text: name,
    },
    {
      type: "div",
      attrs: {
        className: "audio-track-play",
      },
      children: [
        {
          type: "p",
          text: "PLAY",
        },
      ],
      events: {
        onClick: () => {
          onClick(DAE, id);
        },
      },
    },
    {
      type: "div",
      attrs: {
        className: "audio-track-data",
      },
      children: [
        {
          type: "p",
          text: "Track Data",
        },
      ],
      events: {
        onClick: cascade,
      },
    },
    {
      type: "div",
      attrs: {
        className: "audio-track-data-display display-inactive",
      },
      cascade: {
        origin: cascadeProps,
        receiver: (elm: HTMLElement, props) => {
          if (props.open) {
            props.open = false;
            elm.classList.replace("display-active", "display-inactive");
          } else {
            props.open = true;
            elm.classList.replace("display-inactive", "display-active");
          }
        },
      },
      children: [
        {
          type: "pre",
          text: dataString,
        },
      ],
    },
  ]);
};

export const getAudioList = (data: ElementTreeData): ElementTreeData => {
  return Div("audio-list", data);
};
