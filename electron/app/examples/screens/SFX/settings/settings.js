import { DAE } from "../../../../code/DivineAudioEngine.js";
export const SFXSettingsData = {
    listenerX: 0,
    listenerY: 0,
    listenerZ: 0,
    soundX: 0,
    soundY: 0,
    soundZ: 0,
};
const input = (label, inputType, propertyName, valueType) => {
    return [
        {
            type: "div",
            attrs: {
                className: "form-group",
            },
            children: [
                {
                    type: "label",
                    text: label,
                },
                {
                    type: "input",
                    attrs: {
                        input: {
                            type: inputType,
                        },
                    },
                    bindInput: {
                        bindTo: SFXSettingsData,
                        objectPropertyName: propertyName,
                        valueType: valueType,
                    },
                },
            ],
        },
    ];
};
const update = () => {
    DAE.space.setListenerPosition(SFXSettingsData.listenerX, SFXSettingsData.listenerY, SFXSettingsData.listenerZ);
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
                input("3d Listener X", "number", "listenerX", "number"),
                input("3d Listener Y", "number", "listenerY", "number"),
                input("3d Listener Z", "number", "listenerZ", "number"),
                input("Sound X", "number", "soundX", "number"),
                input("Sound Y", "number", "soundY", "number"),
                input("Sound Z", "number", "soundZ", "number"),
                {
                    type: "button",
                    text: "update",
                    events: {
                        onClick: () => {
                            update();
                        },
                    },
                },
            ],
        },
    ];
};
