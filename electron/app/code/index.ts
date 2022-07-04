import { DAE } from "../code/DivineAudioEngine.js";
import { DSLogo } from "./elements/DSLogo.js";
import { ElementTree, ElementTreeData } from "./libs/index.js";
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

await DAE.$INIT();

let x = -10;
setInterval(() => {
  DAE.sfx.play("item-pickup", { _3dSoundPosition: { x: x, y: 5, z: 1 } });
  x += 10;
}, 2000);

const HomeScreen = (): ElementTreeData => {
  return [
    {
      type: "section",
      attrs: {
        className: "home-screen",
      },
      children: [
        DSLogo(),
        {
          type: "h1",
          attrs: {
            className: "dae-logo",
          },
          text: "Divine Voxel Engine",
        },
        {
          type: "h2",
          attrs: {
            className: "dae-version",
          },
          text: "Alpha 1.1 | The Light Update",
        },
      ],
    },
  ];
};

ElementTree.bloomRoot(HomeScreen());
