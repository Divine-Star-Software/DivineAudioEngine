import type { DivineAudioEngine } from "../../code/index";
import { BuiltInReverbList } from "../../code/Meta/Effects.types";
import { RegisterMusic } from "./RegisterMusic.js";
import { RegisterSFX } from "./RegisterSFX.js";

export const ReverbTypes: BuiltInReverbList[] = [
  "Vaneev/Deep Space",
  "Vaneev/Rays",
  "Vaneev/On a Star",
  "Vaneev/St Nicolaes Church",
];

export const InitDAE = async (DAE: DivineAudioEngine) => {
  await DAE.effects.preloadReverbBuffers(ReverbTypes,[]);
  RegisterMusic(DAE);
  RegisterSFX(DAE);
  await DAE.$INIT();
};
