import { Div } from "../../../elements/div.js";
import { formInput, formSelect } from "../../../elements/forms/forms.js";
import { ReverbTypes } from "../../../init/init.js";
import { ElementTreeData } from "../../../libs/index";

export const EffectsSettings = {
  reverb: false,
  reverbType: "",
};

const update = () => {
  //  console.log(EffectsSettings)
};



export const EffectsSettingsForm = (cascadeProps: any): ElementTreeData => {
  return [
    {
      type: "form",
      attrs: {
        className: "sfx-settings-form screen-inactive",
      },
      cascade: {
        origin: cascadeProps,
        receiver: (elm, props) => {
          if (props.currentSettings == "Effects") {
            elm.classList.replace("screen-inactive", "screen-active");
          } else {
            elm.classList.replace("screen-active", "screen-inactive");
          }
        },
      },
      children: [
        formInput(
          "Reverb Enabled",
          "checkbox",
          "boolean",
          "reverb",
          EffectsSettings
        ),
        formSelect("Reverb Type", ReverbTypes, "reverbType", EffectsSettings),
        Div("form-button", [
          {
            type: "button",
            text: "update",
            events: {
              onClick: () => {
                update();
              },
            },
          },
        ]),
      ],
    },
  ];
};
