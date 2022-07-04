import type { DivineAudioEngine } from "../../../../code/DivineAudioEngine";
import type { ElementTreeData } from "../../../libs/index";
import { addAudioTrack } from "../../../elements/audiolist/AudioList.js";
import { SFXSettingsData } from "../settings/3dSettings.js";
import { EffectsSettings } from "../settings/EffectsSettings";

export const registerSFX = () => {
  const data: ElementTreeData = [];

  const play3DSound = (DAE: DivineAudioEngine, id: string) => {
    

    DAE.sfx.play(id, {
      _3dSoundPosition: {
        x: SFXSettingsData.soundX,
        y: SFXSettingsData.soundY,
        z: SFXSettingsData.soundZ,
      },
    });
  };

  for (let i = 0; i < 25; i++) {
    data.push(addAudioTrack("Item Pickup", "item-pickup", play3DSound));
  }

  return data;
};
