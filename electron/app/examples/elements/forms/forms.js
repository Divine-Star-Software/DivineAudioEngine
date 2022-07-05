import { ElementTree, } from "../../libs/index.js";
import { Div } from "../div.js";
ElementTree.linkCSS(import.meta.url, "forms.css");
export const formInput = (label, inputType, valueType, propertyName, bindTo) => {
    return Div("form-group", [
        {
            type: "label",
            text: label,
        },
        {
            type: "input",
            attrs: {
                input: {
                    type: inputType,
                },
            },
            bindInput: {
                bindTo: bindTo,
                objectPropertyName: propertyName,
                valueType: valueType,
            },
        },
    ]);
};
const buildOptionsList = (options) => {
    const returnData = [];
    for (const option of options) {
        returnData.push({
            type: "option",
            text: option,
        });
    }
    return returnData;
};
export const formSelect = (label, options, propertyName, bindTo, onChange) => {
    return Div("form-group", [
        {
            type: "label",
            text: label,
        },
        {
            type: "select",
            events: {
                onChange: (event) => {
                    const target = event.target;
                    bindTo[propertyName] = target.value;
                    if (onChange) {
                        onChange(event);
                    }
                },
            },
            children: buildOptionsList(options),
        },
    ]);
};
