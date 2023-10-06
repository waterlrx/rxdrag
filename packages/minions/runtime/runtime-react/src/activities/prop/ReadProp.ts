import { INodeDefine } from "@rxdrag/minions-schema";
import { IControllerContext } from "../../interfaces";
import { ControllerActivity } from "../ControllerActivity";
import { Activity, Input } from "@rxdrag/minions-runtime";
import { IPropConfig } from "./SetProp";

@Activity(ReadProp.NAME)
export class ReadProp extends ControllerActivity<IPropConfig> {
  public static NAME = "system-react.readProp"

  constructor(meta: INodeDefine<IPropConfig>, context: IControllerContext) {
    super(meta, context)

    if (Object.keys(meta.inPorts || {}).length !== 1) {
      throw new Error("ReadProp inputs count error")
    }
    if (!meta.config?.controllerId) {
      throw new Error("ReadProp not set controller id")
    }
  }

  @Input()
  inputHandler = () => {
    if (this.meta.config?.prop) {
      this.next(this.controller.getProp(this.meta.config?.prop))
    }
  }
}
