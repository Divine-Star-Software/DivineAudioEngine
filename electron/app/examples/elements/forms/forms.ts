


import {
  ElementTree,
  ElementTreeData,
  HTMLInputTypes,
  InputValueTypes,
} from "../../libs/index.js";
import { Div } from "../div.js";


ElementTree.linkCSS(import.meta.url, "forms.css");

export const formInput = (
  label: string,
  inputType: HTMLInputTypes,
  valueType: InputValueTypes,
  propertyName: string,
  bindTo: any
): ElementTreeData => {
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

const buildOptionsList = (options: string[]) => {
  const returnData: ElementTreeData = [];
  for (const option of options) {
    returnData.push({
      type: "option",
      text: option,
    });
  }
  return returnData;
};

export const formSelect = (
  label: string,
  options: string[],
  propertyName: string,
  bindTo: any,
  onChange?: Function
): ElementTreeData => {
  return Div("form-group", [
    {
      type: "label",
      text: label,
    },
    {
      type: "select",
      events: {
        onChange: (event: Event) => {
          const target: HTMLSelectElement = (event as any).target;
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
