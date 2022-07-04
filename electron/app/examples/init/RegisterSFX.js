export const RegisterSFX = (DAE) => {
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
