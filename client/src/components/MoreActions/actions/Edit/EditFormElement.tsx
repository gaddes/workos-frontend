import * as React from "react";
import { Grid, Text } from "@radix-ui/themes";
import { Field, useFormikContext } from "formik";

interface IEditFormElement {
  as?: HTMLElement | React.JSXElementConstructor<any>;
  name: string;
  label: string;
  type?: string; // e.g. "checkbox"
}

export const EditFormElement: React.FC<IEditFormElement> = ({
  as,
  name,
  label,
  type,
}) => {
  const { errors, touched } = useFormikContext();

  return (
    <Grid mb="2">
      <label htmlFor={name}>
        <Text>{label}</Text>
      </label>
      <Field id={name} name={name} as={as} type={type} required />
      {errors[name] && touched[name] ? (
        <Text color="red" size="1">
          {errors[name]}
        </Text>
      ) : null}
    </Grid>
  );
};
