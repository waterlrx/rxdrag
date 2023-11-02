import { INodeSchema } from "@rxdrag/schema";
import { SchemaOptions, createSchema } from "../../../shared";

const schemaOptions: SchemaOptions = {
  propSchemas: [
    {
      componentName: "Input",
      "x-data": {
        label: "$title",
        name: "title",
      }
    },

    {
      componentName: "Switch",
      "x-data": {
        label: "$disabled",
        name: "disabled",
      }
    },
    {
      componentName: "Switch",
      "x-data": {
        label: "$block",
        name: "block",
      }
    },
    {
      componentName: "Switch",
      "x-data": {
        label: "$danger",
        name: "danger",
      }
    },
    {
      componentName: "Switch",
      "x-data": {
        label: "$ghost",
        name: "ghost",
      }
    },
    {
      componentName: "Radio.Group",
      props: {
        optionType: "button",
        size: "small",
        options: [
          {
            label: "$default",
            value: "default"
          },
          {
            label: "$circle",
            value: "circle"
          },
          {
            label: "$round",
            value: "round"
          },
        ],
        defaultValue: "default",
      },
      "x-data": {
        label: "$shape",
        name: "shape",
      }
    },
    {
      componentName: "Radio.Group",
      props: {
        optionType: "button",
        size: "small",
        options: [
          {
            label: "$large",
            value: "large"
          },
          {
            label: "$middle",
            value: "middle"
          },
          {
            label: "$small",
            value: "small"
          },
        ],
        defaultValue: "middle",
      },
      "x-data": {
        label: "$size",
        name: "size",
      }
    },
  ],
  slotSchemas: [
    {
      componentName: "TreeListPopupSelect",
      name: "popup",
      label: "$popupType",
    }
  ],
}

export const boxSchema: INodeSchema = createSchema(schemaOptions)