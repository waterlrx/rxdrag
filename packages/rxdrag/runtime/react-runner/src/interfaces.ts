import { IComponents } from "@rxdrag/react-shared"

export interface IComponentsParams {
  components: IComponents,
  registerComponents: (...components: IComponents[]) => void
}

