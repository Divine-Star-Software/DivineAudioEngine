import type { DivineAudioEngine } from "../../code/index";
import { RegisterMusic } from "./RegisterMusic.js";
import { RegisterSFX } from "./RegisterSFX.js";
export const InitDAE = async (DAE: DivineAudioEngine) => {
  RegisterMusic(DAE);
  RegisterSFX(DAE);
  await DAE.$INIT();
};
