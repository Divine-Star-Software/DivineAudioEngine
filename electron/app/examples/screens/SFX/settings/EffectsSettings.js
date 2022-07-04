import { Div } from "../../../elements/div.js";
import { formInput, formSelect } from "../../../elements/forms/forms.js";
import { ReverbTypes } from "../../../init/init.js";
export const EffectsSettings = {
    playBackRate: 1,
    masterLevel: 1,
    sourceLevel: 1,
    reverb: false,
    reverbType: "",
    reverbLevel: 0.5,
};
const update = () => {
    //  console.log(EffectsSettings)
};
export const EffectsSettingsForm = (cascadeProps) => {
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
                    }
                    else {
                        elm.classList.replace("screen-active", "screen-inactive");
                    }
                },
            },
            children: [
                formInput("Playback Rate", "number", "number", "playBackRate", EffectsSettings),
                formInput("Master Level", "number", "number", "masterLevel", EffectsSettings),
                formInput("Source/Dry Level", "number", "number", "sourceLevel", EffectsSettings),
                formInput("Reverb Enabled", "checkbox", "boolean", "reverb", EffectsSettings),
                formInput("Reverb Level", "number", "number", "reverbLevel", EffectsSettings),
                formSelect("Reverb Type", ReverbTypes, "reverbType", EffectsSettings),
                Div("form-button", [
                    {
                        type: "button",
                        text: "update",
                        events: {
                            onClick: (event) => {
                                event.preventDefault();
                                update();
                            },
                        },
                    },
                ]),
            ],
        },
    ];
};
