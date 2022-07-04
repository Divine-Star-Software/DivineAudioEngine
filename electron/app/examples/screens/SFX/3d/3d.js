import { DAE } from "../../../../code/DivineAudioEngine.js";
import { SFXSettingsData } from "../settings/settings.js";
import { registerSFX } from "./registerSFX.js";
export const add3dSFX = (name, id) => {
    const data = DAE.sfx.getSFXData(id);
    const dataString = JSON.stringify(data, undefined, 5);
    return [
        {
            type: "div",
            attrs: {
                className: "audio-track",
            },
            children: [
                {
                    type: "p",
                    text: name,
                },
                {
                    type: "pre",
                    text: dataString,
                },
            ],
            events: {
                onClick: () => {
                    DAE.sfx.play(id, {
                        _3dSoundPosition: {
                            x: SFXSettingsData.soundX,
                            y: SFXSettingsData.soundY,
                            z: SFXSettingsData.soundZ,
                        },
                    });
                },
            },
        },
    ];
};
export const _3dsfx = (cascadeProps) => {
    return [
        {
            type: "div",
            attrs: {
                className: "audio-list screen-inactive",
            },
            children: registerSFX(),
            cascade: {
                origin: cascadeProps,
                receiver: (elm, props) => {
                    if (props.currentScreen == "3d sfx") {
                        elm.classList.replace("screen-inactive", "screen-active");
                    }
                    else {
                        elm.classList.replace("screen-active", "screen-inactive");
                    }
                },
            },
        },
    ];
};
