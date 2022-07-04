import { DAE } from "../code/DivineAudioEngine.js";
import { CreateScene } from "./scene/CreateScene.js";
import { InitDAE } from "./init/init.js";
import { ElementTree, ElementTreeData } from "./libs/index.js";
import { CreateMainScreen } from "./screens/main/main.js";

await InitDAE(DAE);
ElementTree.linkCSS(import.meta.url, "main.css");

const MainScreen = (): ElementTreeData => {
  return [
    {
      type: "section",
      attrs: {
        id: "main",
      },
      children: [CreateMainScreen()],
    },
  ];
};

ElementTree.bloomRoot(MainScreen());
CreateScene();
