import { RegisterMusic } from "./RegisterMusic.js";
import { RegisterSFX } from "./RegisterSFX.js";
export const ReverbTypes = [
    "Vaneev/Deep Space",
    "Vaneev/Rays",
    "Vaneev/On a Star",
    "Vaneev/St Nicolaes Church",
];
export const InitDAE = async (DAE) => {
    await DAE.effects.preloadReverbBuffers(ReverbTypes, []);
    RegisterMusic(DAE);
    RegisterSFX(DAE);
    await DAE.$INIT();
};
