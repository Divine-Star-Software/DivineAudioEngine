import { DAE } from "../../../../code/DivineAudioEngine.js";
import { Div } from "../../../elements/div.js";
import { formInput } from "../../../elements/forms/forms.js";
import { ScneeObjects } from "../../../scene/CreateScene.js";
export const SFXSettingsData = {
    listenerX: 0,
    listenerY: 0,
    listenerZ: 0,
    listenerDX: 0,
    listenerDY: 0,
    listenerDZ: 0,
    soundX: 0,
    soundY: 4,
    soundZ: 0,
};
const update = () => {
    DAE.space.setListenerPosition(SFXSettingsData.listenerX, SFXSettingsData.listenerY, SFXSettingsData.listenerZ);
    ScneeObjects.sound.position.x = SFXSettingsData.soundX;
    ScneeObjects.sound.position.y = SFXSettingsData.soundY;
    ScneeObjects.sound.position.z = SFXSettingsData.soundZ;
    ScneeObjects.listener.position.x = SFXSettingsData.listenerX;
    ScneeObjects.listener.position.y = SFXSettingsData.listenerY;
    ScneeObjects.listener.position.z = SFXSettingsData.listenerZ;
};
const dirDisplay = { pre: null };
export const _3dsfxSettings = (cascadeProps) => {
    return [
        {
            type: "form",
            attrs: {
                className: "sfx-settings-form screen-active",
            },
            cascade: {
                origin: cascadeProps,
                receiver: (elm, props) => {
                    if (props.currentSettings == "3d Settings") {
                        elm.classList.replace("screen-inactive", "screen-active");
                    }
                    else {
                        elm.classList.replace("screen-active", "screen-inactive");
                    }
                },
            },
            children: [
                formInput("3d Listener X", "number", "number", "listenerX", SFXSettingsData),
                formInput("3d Listener Y", "number", "number", "listenerY", SFXSettingsData),
                formInput("3d Listener Z", "number", "number", "listenerZ", SFXSettingsData),
                formInput("Sound X", "number", "number", "soundX", SFXSettingsData),
                formInput("Sound Y", "number", "number", "soundY", SFXSettingsData),
                formInput("Sound Z", "number", "number", "soundZ", SFXSettingsData),
                Div("form-button", [
                    {
                        type: "button",
                        text: "Set Listener Direction To Camera Direction",
                        events: {
                            onClick: () => {
                                const forward = ScneeObjects.camera.getDirection(new BABYLON.Vector3(0, 0, 1));
                                SFXSettingsData.listenerDX = forward.x;
                                SFXSettingsData.listenerDY = forward.y;
                                SFXSettingsData.listenerDZ = forward.z;
                                DAE.space.setListenerDirection(forward.x, forward.y, forward.z);
                                dirDisplay.pre.innerText = forward.toString();
                            },
                        },
                    },
                ]),
                Div("dir-display", [
                    {
                        type: "pre",
                        toRef: {
                            refObj: dirDisplay,
                            refObjProperty: "pre",
                        },
                        text: "{X:0, Y:0, Z:-1}",
                    },
                ]),
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
