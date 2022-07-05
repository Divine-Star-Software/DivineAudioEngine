import { formInput } from "../../elements/forms/forms.js";
import { ElementTreeData } from "../../libs/index";

export const GloablSettings = {
  masterLevel: 100,
  musicLevel: 100,
  sfxLevel: 100,
};

export const settingsForm = (): ElementTreeData => {
  return [
    {
      type: "form",
      children: [
        formInput("Master", "range", "number", "masterLevel", GloablSettings),
        formInput("Music", "range", "number", "musicLevel", GloablSettings),
        formInput("SFX", "range", "number", "sfxLevel", GloablSettings),
        {
          type: "button",
          text: "update",
          events: {
            onClick: (event: Event) => {
              event.preventDefault();
              console.log(GloablSettings);
            },
          },
        },
      ],
    },
  ];
};
