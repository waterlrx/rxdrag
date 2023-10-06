import { IVariableConfig, ListenVariable } from "@rxdrag/minions-runtime-react"
import { NodeType } from "@rxdrag/minions-schema"
import { createId } from "@rxdrag/shared"
import { variableIcon } from "../../icons"
import { IRxDragActivityMaterial, LogicflowContextParam } from "../../interfaces"

export const listenVariableMaterial: IRxDragActivityMaterial<IVariableConfig, LogicflowContextParam> = {
  icon: variableIcon,
  label: "$listenVariable",
  activityType: NodeType.Activity,
  defaultPorts: {
    outPorts: [
      {
        id: createId(),
        name: "output",
        label: "",
      },
    ],
  },
  activityName: ListenVariable.NAME,
  title: (config?: IVariableConfig, context?: LogicflowContextParam) => {
    return context?.variables?.find(v => v.id === config?.variable)?.name || config?.variable
  },
}
