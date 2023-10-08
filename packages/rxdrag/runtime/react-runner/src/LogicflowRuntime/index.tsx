import React, { memo, useEffect } from "react"
import { useState } from "react"
import { ControllerEngineContext } from "../contexts"
import { ControllerEngine } from "./ControllerEngine"
import { useLogicFlowContext } from "../hooks/useLogicFlowContext"
import { IComponentRenderSchema } from "../ComponentView"
import { ILogicFlowDefine, IScriptDefine, IVariable } from "@rxdrag/minions-schema"
import { useControllerEngine } from "../hooks/useControllerEngine"
import { ControllerReaction } from "@rxdrag/minions-runtime-react"
import { LogicFlow } from "@rxdrag/minions-runtime"

export type LogicFlowOptions = {
  reactions?: Record<string, ControllerReaction>,
  flows?: ILogicFlowDefine[],
  fxFlows?: ILogicFlowDefine[],
  scripts?: IScriptDefine[],
  fxScripts?: IScriptDefine[],
  variables?: IVariable[],
}

export const LogicflowRuntime = memo((props: {
  children: React.ReactNode,
  schema: IComponentRenderSchema,
} & LogicFlowOptions) => {
  const { children, schema, reactions, flows, fxFlows, scripts, fxScripts, variables } = props
  const [controllerEngine, setControllerEngine] = useState<ControllerEngine>()

  const parent = useControllerEngine()

  useEffect(() => {
    const rtEngine = new ControllerEngine(
      schema,
      {
        parent,
        variableMetas: variables,
        reactions: { ...parent?.reactions, ...reactions },
        fxFlows
      }
    )
    setControllerEngine(rtEngine)
    return () => {
      rtEngine.destroy()
    }
  }, [fxFlows, parent, reactions, schema, variables])
  const logicFlowContext = useLogicFlowContext(controllerEngine);

  useEffect(() => {
    const flowRuntimes = flows?.map(flowMeta => {
      return new LogicFlow(flowMeta, logicFlowContext)
    })

    return () => {
      flowRuntimes?.forEach(flow => flow.destroy())
    }
  }, [flows, logicFlowContext])

  return (
    controllerEngine ?
      <ControllerEngineContext.Provider value={controllerEngine}>
        {
          children
        }
      </ControllerEngineContext.Provider>
      : <>can not create run time engine</>
  )
})