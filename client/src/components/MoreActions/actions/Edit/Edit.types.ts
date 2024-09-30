import * as React from "react";
import { TypedMutationTrigger } from "@reduxjs/toolkit/query/react";

import { EditTitle } from "./EditTitle.tsx";
import { EditDescription } from "./EditDescription.tsx";
import { EditSubmitText } from "./EditSubmitText.tsx";
import { EditFormElement } from "./EditFormElement.tsx";

interface IEditProps {
  // Would spend more time typing this correctly in prod
  onClick: TypedMutationTrigger<any, any, any>;
  children: React.ReactNode;
  initialValues: any;
  validationSchema: any;
}

export interface IEdit extends React.FC<IEditProps> {
  Title: typeof EditTitle;
  Description: typeof EditDescription;
  SubmitText: typeof EditSubmitText;
  FormElement: typeof EditFormElement;
}

export interface IEditComponent {
  onClick: TypedMutationTrigger<any, any, any>;
  children: React.ReactNode;
}

export interface IEditSlot {
  children: React.ReactNode;
}
