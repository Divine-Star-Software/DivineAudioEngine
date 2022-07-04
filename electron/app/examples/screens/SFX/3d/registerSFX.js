import { addAudioTrack } from "../../../elements/audiolist/AudioList.js";
import { SFXSettingsData } from "../settings/3dSettings.js";
import { EffectsSettings } from "../settings/EffectsSettings.js";
export const registerSFX = () => {
    const data = [];
    const play3DSound = (DAE, id) => {
        const effects = {};
        if (EffectsSettings.reverb && EffectsSettings.reverbType != "") {
            effects.reverb = {
                //@ts-ignore
                builtIn: EffectsSettings.reverbType,
                level: EffectsSettings.reverbLevel,
            };
        }
        const data = DAE.sfx.getSFXData(id);
        if (!data.varations) {
            DAE.sfx.play(id, {
                level: EffectsSettings.masterLevel,
                dryLevel: EffectsSettings.sourceLevel,
                playBackRate: EffectsSettings.playBackRate,
                _3dSoundPosition: {
                    x: SFXSettingsData.soundX,
                    y: SFXSettingsData.soundY,
                    z: SFXSettingsData.soundZ,
                },
                effects: effects,
            });
        }
        else {
            DAE.sfx.play(id, {
                _3dSoundPosition: {
                    x: SFXSettingsData.soundX,
                    y: SFXSettingsData.soundY,
                    z: SFXSettingsData.soundZ,
                },
            });
        }
    };
    data.push(addAudioTrack("Electric Gong", "electric-gong", play3DSound));
    data.push(addAudioTrack("Electric Gong With Varations", "electric-gong-varations", play3DSound));
    data.push(addAudioTrack("Item Pickup", "item-pickup", play3DSound));
    return data;
};
