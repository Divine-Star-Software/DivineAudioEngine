import { RegisterMusic } from "./RegisterMusic.js";
import { RegisterSFX } from "./RegisterSFX.js";
export const InitDAE = async (DAE) => {
    RegisterMusic(DAE);
    RegisterSFX(DAE);
    await DAE.$INIT();
};
