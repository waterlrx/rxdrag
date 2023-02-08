import { INodeSchema } from "core";
import { labelSchema } from "../../baseSchema";

export const debugSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
  ],
}