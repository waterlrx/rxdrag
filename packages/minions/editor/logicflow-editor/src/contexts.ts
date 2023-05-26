import { Graph } from "@antv/x6";
import { ReactNode, createContext } from "react";
import { EditorStore } from "./classes/EditorStore";
import { IState } from "./interfaces/state";
import { Action } from "./actions";
import { IActivityMaterial, ILogicFlowDefinition } from "@rxdrag/minions-schema";
import { IThemeToken } from "./interfaces";


export interface IReactionsEditorParams extends IState {
  graph?: Graph
  dispatch: React.Dispatch<Action>
}

export const initialState: IState = {
  changeFlag: 0,
  undoList: [],
  redoList: [],
  nodes: [],
  lines: [],
  selected: undefined,
  zoom: 1,
}

export const LogicFlowEditorStoreContext = createContext<EditorStore | undefined>(undefined)
export const GraphContext = createContext<Graph | undefined>(undefined)
export const MaterialsContext = createContext<IActivityMaterial<ReactNode>[]>([])
//所有可以被引用的编排
export const CanBeReferencedLogicFlowMetasContext = createContext<ILogicFlowDefinition[]>([])

export const ThemeTokenContext = createContext<IThemeToken>({})
