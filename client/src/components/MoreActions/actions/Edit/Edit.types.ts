import * as React from "react";
import { TypedMutationTrigger } from "@reduxjs/toolkit/query/react";

import { EditTitle } from "./EditTitle.tsx";
import { EditDescription } from "./EditDescription.tsx";
import { EditSubmitText } from "./EditSubmitText.tsx";
import { EditFormField } from "./EditFormField.tsx";

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
  FormField: typeof EditFormField;
}

export interface IEditComponent {
  onClick: TypedMutationTrigger<any, any, any>;
  children: React.ReactNode;
}

export interface IEditSlot {
  children: React.ReactNode;
}
