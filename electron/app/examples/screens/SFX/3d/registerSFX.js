import { add3dSFX } from "./3d.js";
export const registerSFX = () => {
    const data = [];
    data.push(add3dSFX("Item Pickup", "item-pickup"));
    return data;
};
