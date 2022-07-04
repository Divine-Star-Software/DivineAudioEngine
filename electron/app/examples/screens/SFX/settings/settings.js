import { ElementTree } from "../../../libs/index.js";
import { _3dsfxSettings } from "./3dSettings.js";
import { EffectsSettingsForm } from "./EffectsSettings.js";
const sfxSettingsProps = {
    currentSettings: "3d Settings",
};
const [formCascade] = ElementTree.cascade(sfxSettingsProps);
const settingsDropDown = () => {
    return [
        {
            type: "select",
            children: [
                {
                    type: "option",
                    text: "3d Settings",
                },
                {
                    type: "option",
                    text: "Effects",
                },
            ],
            events: {
                onChange: (evnet) => {
                    const target = event.target;
                    sfxSettingsProps.currentSettings = target.value;
                    formCascade();
                },
            },
        },
    ];
};
export const sfxSettings = (cascadeProps) => {
    return [
        {
            type: "form",
            attrs: {
                className: "sfx-settings-form screen-active",
            },
            cascade: {
                origin: cascadeProps,
                receiver: (elm, props) => {
                    if (props.currentScreen == "settings") {
                        elm.classList.replace("screen-inactive", "screen-active");
                    }
                    else {
                        elm.classList.replace("screen-active", "screen-inactive");
                    }
                },
            },
            children: [
                settingsDropDown(),
                _3dsfxSettings(sfxSettingsProps),
                EffectsSettingsForm(sfxSettingsProps),
            ],
        },
    ];
};
