import { NodeType } from "@rxdrag/minions-schema";
import { propSchema } from "./schema"
import { createId } from "@rxdrag/shared";
import { IPropConfig, SetProp } from "@rxdrag/minions-runtime-react";
import { setPropIcon } from "../../icons";

import { IRxDragActivityMaterial } from "../../interfaces";
import { IControllerEditorContextParam } from "@rxdrag/minions-controller-editor";

export const setPropMaterial: IRxDragActivityMaterial<IPropConfig, IControllerEditorContextParam> = {
  icon: setPropIcon,
  label: "$setProp",
  activityType: NodeType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: "input",
        label: "",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: "output",
        label: "",
      },
    ],
  },
  schema: propSchema,
  subTitle: (config?: IPropConfig, context?: IControllerEditorContextParam) => {
    const controllerName = context?.controllers?.find(controller => controller.id === config?.param?.controllerId)?.name
    return controllerName ? (controllerName + "/" + (config?.param?.prop || "")) : ""
  },
  activityName: SetProp.NAME,
}