import * as React from "react";
import { MutationActionCreatorResult } from "@reduxjs/toolkit/query";

import { DeleteTitle } from "components/MoreActions/actions/Delete/DeleteTitle.tsx";
import { DeleteDescription } from "./DeleteDescription.tsx";
import { DeleteSubmitText } from "./DeleteSubmitText.tsx";

interface IDeleteProps {
  onClick: () => MutationActionCreatorResult<any>;
  children: React.ReactNode;
}

export interface IDelete extends React.FC<IDeleteProps> {
  Title: typeof DeleteTitle;
  Description: typeof DeleteDescription;
  SubmitText: typeof DeleteSubmitText;
}

export interface IDeleteSlot {
  children: React.ReactNode;
}
