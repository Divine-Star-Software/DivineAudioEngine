import { getAudioList } from "../../../elements/audiolist/AudioList.js";
import { registerSFX } from "./registerSFX.js";
export const _3dsfx = (cascadeProps) => {
    return [
        {
            type: "div",
            attrs: {
                className: "screen-inactive",
            },
            children: getAudioList(registerSFX()),
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
