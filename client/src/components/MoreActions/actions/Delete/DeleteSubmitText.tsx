import * as React from "react";
import { Strong } from "@radix-ui/themes";
import { IDeleteSlot } from "./Delete.types.ts";

export const DeleteSubmitText: React.FC<IDeleteSlot> = ({ children }) => {
  return <Strong>{children}</Strong>;
};
