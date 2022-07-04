import { DivineAudioEngine } from "../../code/DivineAudioEngine";

export const RegisterSFX = (DAE: DivineAudioEngine) => {
  DAE.sfx.registerSFX([
    {
      path: "./assets/audio/sfx/electric-gong.wav",
      id: "electric-gong",
      channel: "sfx",
      is3dSound: true,
      _3dSoundData: {
        rolloffFactor: 1,
      },
    },
  ]);

  DAE.sfx.registerSFX([
    {
      path: "./assets/audio/sfx/electric-gong.wav",
      id: "electric-gong-varations",
      channel: "sfx",
      is3dSound: true,
      _3dSoundData: {
        rolloffFactor: 1,
      },
      varations: [
        {
          playBackRate: 0.9,
        },
        {
          playBackRate: 0.8,
        },
        {
          playBackRate: 1.2,
        },
        {
          playBackRate: 0.5,
        },
      ],
    },
  ]);

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
