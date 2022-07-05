import { ParticleSystemData } from "./particles.js";
export const ScneeObjects = {
    listener: null,
    sound: null,
    camera: null,
};
const states = {
    main: true,
};
window.addEventListener("keydown", (event) => {
    console.log(event.key);
    //@ts-ignore
    const main = document.getElementById("main");
    if (event.key == "F1") {
        if (states.main) {
            states.main = false;
            main.style.display = "none";
        }
        else {
            states.main = true;
            document.exitPointerLock();
            main.style.display = "block";
        }
    }
});
export const CreateScene = () => {
    const canvas = document.createElement("canvas");
    canvas.id = "renderCanvas";
    document.body.append(canvas);
    const engine = new BABYLON.Engine(canvas, false, {});
    //engine.setSize(1920, 1080);
    const scene = new BABYLON.Scene(engine);
    const light = new BABYLON.HemisphericLight("", new BABYLON.Vector3(0, 1, 0), scene);
    const camera = new BABYLON.FreeCamera("main", BABYLON.Vector3.Zero(), scene);
    camera.position.x = 0;
    camera.position.z = 20;
    camera.position.y = 0;
    ScneeObjects.camera = camera;
    camera.setTarget(BABYLON.Vector3.Zero());
    scene.activeCamera = camera;
    camera.attachControl(canvas, true);
    canvas.addEventListener("click", () => {
        if (!states.main) {
            canvas.requestPointerLock();
        }
    });
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.5);
    const particleSystem = BABYLON.ParticleSystem.Parse(ParticleSystemData, scene, "");
    particleSystem.isLocal = true;
    particleSystem.emitter = new BABYLON.Vector3(0, 20, -100);
    const mat1 = new BABYLON.StandardMaterial("", scene);
    mat1.diffuseColor.r = 1;
    mat1.diffuseColor.g = 0;
    mat1.diffuseColor.b = 1;
    const mat2 = new BABYLON.StandardMaterial("", scene);
    mat2.diffuseColor.r = 0;
    mat2.diffuseColor.g = 1;
    mat2.diffuseColor.b = 1;
    const soundSphere = BABYLON.MeshBuilder.CreateSphere("", { diameter: 1 });
    soundSphere.position.y = 4;
    soundSphere.material = mat1;
    //soundSphere.visibility = 0.5;
    ScneeObjects.sound = soundSphere;
    const listenerBox = BABYLON.MeshBuilder.CreateBox("", {
        height: 2,
        width: 1,
        depth: 1,
    });
    listenerBox.material = mat2;
    //listenerBox.visibility = 0.5;
    ScneeObjects.listener = listenerBox;
    engine.runRenderLoop(() => {
        scene.render();
    });
};
