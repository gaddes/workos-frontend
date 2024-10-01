import * as React from "react";
import { Grid, Text } from "@radix-ui/themes";
import { Field, useFormikContext } from "formik";

interface IEditFormElement {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  as?: HTMLElement | React.JSXElementConstructor<any>;
  name: string;
  label: string;
  type?: string; // e.g. "checkbox"
}

export const EditFormField: React.FC<IEditFormElement> = ({
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
      {/* @ts-expect-error - ignoring types here for expediency */}
      {errors[name] && touched[name] ? (
        <Text color="red" size="1">
          {/* @ts-expect-error - ignoring types here for expediency */}
          {errors[name]}
        </Text>
      ) : null}
    </Grid>
  );
};
