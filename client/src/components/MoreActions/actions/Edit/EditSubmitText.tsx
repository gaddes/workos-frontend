import * as React from "react";
import { Strong } from "@radix-ui/themes";
import { IEditSlot } from "./Edit.types.ts";

export const EditSubmitText: React.FC<IEditSlot> = ({ children }) => {
  return <Strong>{children}</Strong>;
};
