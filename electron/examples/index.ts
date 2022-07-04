import { DAE } from "../code/DivineAudioEngine.js";
import { CreateScene } from "./background/CreateScene.js";
import { InitDAE } from "./init/init.js";
import { ElementTree, ElementTreeData } from "./libs/index.js";
import { CreateMainScreen } from "./screens/main/main.js";

await InitDAE(DAE);

ElementTree.linkCSS(import.meta.url, "main.css");

/* let x = -10;
setInterval(() => {
  DAE.sfx.play("item-pickup", { _3dSoundPosition: { x: x, y: 5, z: 1 } });
  x += 10;
}, 2000); */

const HomeScreen = (): ElementTreeData => {
  return [
    {
      type: "section",
      children: [CreateMainScreen()],
    },
  ];
};

ElementTree.bloomRoot(HomeScreen());

CreateScene();
