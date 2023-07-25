import { IFieldMeta } from "@rxdrag/fieldy-schema"
import { ILogicFlowControllerMeta } from "@rxdrag/minions-runtime-react"
import { INodeSchema } from "@rxdrag/schema"

export interface ISlotSchema {
  name: string,
  label?: string,
}

export function transSlotSchemas(schemas: ISlotSchema[]): INodeSchema<IFieldMeta, ILogicFlowControllerMeta>[] {
  return schemas.map((schema) => ({
    componentName: "SlotSwitch",
    props: {
      name: schema.name
    },
    "x-field": {
      label: schema.label,
    }
  }))
}