import { setPropIcon } from "@rxdrag/react-shared"
import { IReactionMaterial, ReactionType } from "@rxdrag/schema"
import { createUuid } from "@rxdrag/shared"
import { IControllerReactionConfig } from "../AbstractControllerReaction"
import { SetProp } from "./reaction"
import { setPropSchema } from "./schema"

export const setPropMaterial: IReactionMaterial = {
  name: "setProp",
  icon: setPropIcon,
  label: "$setProp",
  reactionType: ReactionType.ControllerDefaultReaction,
  meta: {
    inPorts: [
      {
        id: createUuid(),
        name: "input",
        label: "",//"$startUp",
      },
    ],
  },
  schema: setPropSchema,
  subTitle: (config?: IControllerReactionConfig) => {
    return config?.prop
  },
  reaction: SetProp,
}