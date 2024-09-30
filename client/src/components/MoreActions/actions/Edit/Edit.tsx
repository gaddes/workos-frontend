import * as React from "react";
import {
  AlertDialog,
  DropdownMenu,
  Button,
  Flex,
  Strong,
} from "@radix-ui/themes";
import * as RadixForm from "@radix-ui/react-form";
import { Formik, Form, useFormikContext } from "formik";

import { MoreActionsContext } from "../../MoreActions.context.tsx";

import styles from "./Edit.module.css";
import { IEdit, IEditComponent } from "./Edit.types.ts";
import { EditTitle } from "./EditTitle.tsx";
import { EditSubmitText } from "./EditSubmitText.tsx";
import { EditFormElement } from "./EditFormElement.tsx";
import { EditDescription } from "./EditDescription.tsx";

export const EditComponent: React.FC<IEditComponent> = ({
  onClick,
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const context = React.useContext(MoreActionsContext);
  const { values, errors, isSubmitting, setSubmitting } = useFormikContext();

  if (!context) {
    throw new Error(
      "MoreActionsContext must be used within a MoreActionsProvider",
    );
  }

  const title = React.Children.toArray(children).find((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Edit.Title : false;
  });

  const description = React.Children.toArray(children).find((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Edit.Description : false;
  });

  const submitText = React.Children.toArray(children).find((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Edit.SubmitText : false;
  });

  const formElements = React.Children.toArray(children).filter((child) => {
    // @ts-expect-error - this component only accepts ReactElements
    return "type" in child ? child.type === Edit.FormElement : false;
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent AlertDialog closing (we only want this behaviour when the API call is successful)
    e.preventDefault();

    if (Object.keys(errors).length) {
      console.error("please fix errors before submitting");
      return;
    }

    setSubmitting(true);

    try {
      await onClick(values).unwrap();
      context.setOpen(false);
    } catch {
      console.error("Error updating item. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger>
        <DropdownMenu.Item onClick={() => setOpen(true)}>
          Edit
        </DropdownMenu.Item>
      </AlertDialog.Trigger>

      <AlertDialog.Content maxWidth="450px">
        <RadixForm.Root className={styles.Root} asChild>
          <Form>
            <AlertDialog.Title>{title}</AlertDialog.Title>
            <AlertDialog.Description size="2" mb="2">
              {description}
            </AlertDialog.Description>

            <Flex direction="column" align="stretch">
              {formElements}
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="outline" color="gray">
                  <Strong>Cancel</Strong>
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button
                  variant="surface"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {submitText}
                </Button>
              </AlertDialog.Action>
            </Flex>
          </Form>
        </RadixForm.Root>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export const Edit: IEdit = ({
  initialValues,
  validationSchema,
  children,
  ...props
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={() => {}}
  >
    <EditComponent {...props}>{children}</EditComponent>
  </Formik>
);

Edit.Title = EditTitle;
Edit.Description = EditDescription;
Edit.SubmitText = EditSubmitText;
Edit.FormElement = EditFormElement;
