import { memo, useCallback, useMemo, useState } from "react"
import { DraggableChildrenFn, DroppableChildrenFn, IDroppableStateSnapshot, Identifier } from "./types"
import { DroppableContext, DroppableParams, defualtDroppableParams } from "../contexts";
import { DROPPABLE_ATTR_ID_NAME } from "./consts";
import { useDndSnapshot } from "./hooks/useDndSnapshot";


export type Direction = 'horizontal' | 'vertical';

export type DroppableProps = {
  droppableId: Identifier
  dropDisabled?: boolean,
  direction?: Direction,
  children?: DroppableChildrenFn,
  //目标位置的占位符
  renderPlaceholder?: DraggableChildrenFn
}

export const Droppable = memo((props: DroppableProps) => {
  const { droppableId, children, renderPlaceholder } = props
  const [element, setElement] = useState<HTMLElement>()
  const droppableState = useState<DroppableParams>(defualtDroppableParams)
  const dndSnapshot = useDndSnapshot()

  const handleRefChange = useCallback((element?: HTMLElement | null) => {
    element?.setAttribute(DROPPABLE_ATTR_ID_NAME, droppableId.toString())
    setElement(element || undefined)
  }, [droppableId])

  const snapshot: IDroppableStateSnapshot = useMemo(() => {
    return {
      isDraggingOver: false,
    }
  }, [])

  return (
    <DroppableContext.Provider value={droppableState}>
      {children && children(handleRefChange, snapshot)}
    </DroppableContext.Provider>
  )
})