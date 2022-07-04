import { DivineAudioEngine } from "../../code/DivineAudioEngine";

export const RegisterSFX = (DAE: DivineAudioEngine) => {
  DAE.sfx.registerSFX([
    {
      path: "./assets/audio/sfx/item-pickup.wav",
      id: "item-pickup",
      channel: "sfx",
      is3dSound: true,
      _3dSoundData: {
        rolloffFactor: 1,
      },
    },
  ]);
};
