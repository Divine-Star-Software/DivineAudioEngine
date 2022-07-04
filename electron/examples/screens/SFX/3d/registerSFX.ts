import { ElementTreeData } from "../../../libs/index"
import { add3dSFX } from "./3d.js";





export const registerSFX = () => {


        const data : ElementTreeData = [];


        data.push(
            add3dSFX("Item Pickup","item-pickup")
        )

        return data;
}

